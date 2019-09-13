import { LitElement, html } from 'lit-element';
class MyFirstComponent extends LitElement {
    static get properties() {
        return { name: {type: String} }
    }

    constructor() {
        super();
        this.name;
    }

    render() {
        return html`<p>Hello, ${this.name}</p>`
    }
}
customElements.define('my-first-component', MyFirstComponent)