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
        return html`<h3>Hello, ${this.name} !</h3>`
    }
}
customElements.define('my-first-component', MyFirstComponent)