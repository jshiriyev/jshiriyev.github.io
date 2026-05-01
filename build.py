from __future__ import annotations

from copy import deepcopy
from pathlib import Path

import frontmatter
import yaml
from jinja2 import Environment, FileSystemLoader
from markdown2 import markdown


ROOT = Path(__file__).resolve().parent
SITEMAP_PATH = ROOT / "sitemap.yml"
LAYOUTS_DIR = ROOT / "layouts"
HOME_SLUG = "home"


def load_sitemap() -> dict:
    with SITEMAP_PATH.open("r", encoding="utf-8") as ymlfile:
        return yaml.safe_load(ymlfile)


def load_markdown(path: Path) -> dict:
    with path.open("r", encoding="utf-8") as mdfile:
        post = frontmatter.loads(mdfile.read())

    item = dict(post.metadata)
    item["content"] = post.content
    item["html-preface"] = markdown(post.content)
    return item


def page_link(target_slug: str, current_slug: str) -> str:
    if target_slug == HOME_SLUG:
        return "." if current_slug == HOME_SLUG else ".."
    if current_slug == HOME_SLUG:
        return target_slug
    return f"../{target_slug}"


def make_pages(sitemap: dict, current_slug: str) -> list[dict]:
    pages = []

    for slug in sitemap["page-dirs"]:
        page = load_markdown(ROOT / slug / "preface.md")
        page["nick"] = slug
        page["mdname"] = slug
        page["dir"] = page_link(slug, current_slug)
        page["status"] = "active" if slug == current_slug else "passive"
        pages.append(page)

    return pages


def load_page_content(page: dict, sitemap: dict) -> dict:
    slug = page["nick"]
    page = deepcopy(page)
    page["majors"] = []

    for major_dir in sitemap.get(f"{slug}-dirs", []):
        major_path = ROOT / slug / major_dir
        major = load_markdown(major_path / "preface.md")
        major["mdname"] = major_dir
        major["items"] = []

        for item_markdown in sitemap.get(f"{major_dir}-markdowns", []):
            item_path = major_path / item_markdown
            item = load_markdown(item_path)
            item["html-column-1"] = item["html-preface"]
            item["mdname"] = item_markdown.rsplit(".", 1)[0]
            major["items"].append(item)

        page["majors"].append(major)

    for item_markdown in sitemap.get(f"{slug}-markdowns", []):
        item_path = ROOT / slug / item_markdown
        major = load_markdown(item_path)
        major["mdname"] = item_markdown.rsplit(".", 1)[0]
        major["items"] = []
        page["majors"].append(major)

    hybrid_path = ROOT / slug / "hybrid.html"
    if hybrid_path.exists():
        page["html-hybrid"] = hybrid_path.read_text(encoding="utf-8")

    return page


def build_page(slug: str) -> None:
    sitemap = load_sitemap()
    template_env = Environment(loader=FileSystemLoader(searchpath=LAYOUTS_DIR))

    pages = make_pages(sitemap, slug)
    page_lookup = {page["nick"]: page for page in pages}
    page = load_page_content(page_lookup[slug], sitemap)
    page["asset_prefix"] = "." if slug == HOME_SLUG else ".."

    frame_base = template_env.get_template("base.html")
    frame_ribbon = template_env.get_template("ribbon.html")
    frame_sidebar = template_env.get_template("sidebar.html")
    frame_canvas = template_env.get_template("canvas.html")

    page["html-ribbon"] = frame_ribbon.render(pages=pages)
    page["html-sidebar"] = frame_sidebar.render(page=page)
    page["html-canvas"] = frame_canvas.render(page=page)

    html = frame_base.render(page=page)
    output_dir = ROOT if slug == HOME_SLUG else ROOT / slug
    output_dir.mkdir(parents=True, exist_ok=True)
    (output_dir / "index.html").write_text(html, encoding="utf-8")

    if slug == HOME_SLUG:
        source_output_dir = ROOT / slug
        source_output_dir.mkdir(parents=True, exist_ok=True)
        redirect = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=../">
    <title>Home | Shiriyev Portfolio</title>
  </head>
  <body>
    <p><a href="../">Go to homepage</a></p>
  </body>
</html>
"""
        (source_output_dir / "index.html").write_text(redirect, encoding="utf-8")


def build_site() -> None:
    sitemap = load_sitemap()
    for slug in sitemap["page-dirs"]:
        build_page(slug)


if __name__ == "__main__":
    build_site()
