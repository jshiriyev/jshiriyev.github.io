var today = new Date();

var date = today.getDate();
var month = today.toLocaleString('en-us', { month: 'short' });
var year = today.getFullYear();

footer = 'Last Edited ' + month + '-' + date + ', ' + year;

class PageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ul class="infobar">
                <li>${footer}</li>
            </ul>
        </footer>
        `
    }
}

customElements.define('page-footer',PageFooter)