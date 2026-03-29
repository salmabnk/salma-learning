import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PageFooter extends LitElement {

    static properties = {
       currentYear: { type: Number }
    };
  constructor() {
    super();
    this.currentYear = new Date().getFullYear();
  }
   
static styles = css`
  footer {
    display: block;
    padding: 10px;
    background: #eee;
    text-align: center;
  }
`;
    render() {
        return html`
        <footer>
        <p>&copy; ${this.currentYear} Salma Khan. All Rights Reserved.</p>
        </footer>
      `;
    }
}
customElements.define('page-footer', PageFooter);

