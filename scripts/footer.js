class PageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ul class="infobar">
                <li>Last Edited Feb-22, 2022</li>
            </ul>
        </footer>
        `
    }
}

customElements.define('page-footer',PageFooter)