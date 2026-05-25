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
    background: linear-gradient( #a06636, #3bc229); 
    display: block;
    padding: 10px;
    text-align: center;
  }
    p {
      text-shadow: 1px 1px 2px #9e5f18; }
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

