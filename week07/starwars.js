import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class StarWars extends LitElement {

    static properties = {
        film: {type: String},
        _data: {state: true},
        _characters: {state: true}
    }

    static styles = css`
    .characters {
        display: flex;
        flex-wrap: wrap; 
    }
    sw-character {
        border: 1px solid black;
        margin: 10px;
        padding: 5px;
    }
    .crawl {
        margin: auto;
        text-align: center;
    }
    .crawl p {
        line-height: 5px;
        font-variant: small-caps;
    }`;

    static BASE_URL = "https://swapi.dev/api/films/";

    constructor() {
        super();
        this.film = "1";
        this._films = [1, 2, 3, 4, 5, 6]
        this._characters = [];
    }

    connectedCallback() {
        super.connectedCallback();
        this._fetch();
    }

    _fetch () {
        fetch(StarWars.BASE_URL + this.film)
        .then(response => response.json())
        .then(data => { 
            this._data = data;
        });
    }

    _updateFilm(e) {
        this.film = e.target.value;
        this._data = undefined;
        this._fetch();  
    }

    render() {
        if (this._data) {
            const crawl = this._data.opening_crawl.split('\r\n')
            return html`
            <form>
                <select name="film" @change=${this._updateFilm}>
                    ${this._films.map(film => {
                        let selected = film == this.film;
                        return html`<option name=${film} ?selected=${selected}>${film}</option>`
                    }
                        )}
                </select>
            </form>
            
            <h2>${this._data.title}</h2>
            <p>Directed by: ${this._data.director}</p>

            <h3>Characters</h3>

            <div class="characters">
                ${this._data.characters.map(url => {
                    return html`<sw-character url="${url}"></sw-character>`;
                })}
            </div>

            <div class='crawl'>${crawl.map(line => html`<p>${line}</p>`)}</div>`;
        } else {
            return html`<p>Loading...${this.film}</p>`;
        }
    }
}

customElements.define('star-wars', StarWars);


class StarWarsCharacter extends LitElement {
    static properties = {
        url: {},
        _data: {state: true}
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback(); 
        /* get the character data from the API */
        if (this.url) {
            fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this._data = data
            })
        }
    }

    render() {
        if (this._data) {
            return html`<h2>${this._data.name}</h2>
            <p>Height: ${this._data.height}</p>
            `;
        }
    }
}

customElements.define('sw-character', StarWarsCharacter);