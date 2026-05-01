# jshiriyev.github.io

Personal technical portfolio hosted with GitHub Pages.

The site is generated from Markdown/frontmatter source files with a small Python/Jinja build system. The generated HTML is committed so GitHub Pages can serve it as a static site.

## Structure

- `home/` - homepage source content.
- `reservoir_engineering/` - reservoir engineering portfolio topics.
- `modeling/` - modeling and computational engineering notes.
- `pydemo/` - Python demo content and scripts.
- `teaching_materials/` - Google Drive-oriented teaching material landing page.
- `research/` - research themes and links.
- `layouts/` - Jinja templates.
- `styles/` - CSS files.
- `scripts/` - client-side JavaScript.
- `sitemap.yml` - page order and content collections used by the builder.
- `build.py` - central site generator.
- `SITEMAP_WORKSHEET.md` - planning worksheet for the next content pass.

## Build

Install dependencies:

```bash
python -m pip install -r requirements.txt
```

Generate the site:

```bash
python main.py
```

The homepage is written to `index.html`. Subpages are written to each section's `index.html`.

## Content Roadmap

- Prepare log depthview, and make it to main index.html
- Add log summary charts to PyDemo
- Add production allocation to PyDemo
- Add Well Test type curves to PyDemo
- Add Single Phase Oil Flow to PyDemo
- Add Single Phase Gas Flow to PyDemo
- Add Buckley Leverett Solution to PyDemo
- Add Three Phase Solution to PyDemo

After creating lecture notes in the drive:
- Add Google Drive Links to the Lectures

Prepare one sample modeling, and make it automated:
- Petrophysics
- Reservoir Geomodeling
- Fluid Modeling
- Material Balance
- Reservoir Simulation
- Production Analysis
- Borehole Modeling

Correct the About section, remove unnecessary part, bring back image!

Correct the jump!
