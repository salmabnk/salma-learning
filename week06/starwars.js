import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement {

  static properties = {
    film: { type: Number },
    title: { type: String },
    director: { type: String }
  };

  static BASE_URL = "https://swapi.dev/api/films/";

  constructor() {
    super();
    this.film = 1;           // default film number
    this.title = '';
    this.director = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchStarWars();
  }

  fetchStarWars() {
    fetch(StarWars.BASE_URL + this.film)
    .then(response => response.json()) // convert response to JSON
    .then(data => {
      // update properties (triggers re-render)
      this.title = data.title;
      this.director = data.director;
    })
    .catch(error => {
      console.error('Error fetching film data:', error);
    });
}

// render() method is a Lit lifecycle method
// It defines what HTML your component displays
  render() {
    return html`
      <div>
        <h2>Title of the film: ${this.title || 'Loading...'}</h2>
        <p>Director: ${this.director}</p>
      </div>
    `;
  }
}

// Registering the custom element
customElements.define('star-wars', StarWars);