class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <h2>RESERVOIR ENGINEERING PORTFOLIO</h2>
        </header>
        `
    }
}

customElements.define('page-header',PageHeader)
