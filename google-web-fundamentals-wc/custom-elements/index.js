class AppDrawer extends HTMLElement {

    get isOpened() {
        return this.hasAttribute('open');
    }

    set openWith(value) {
        if(value === undefined)
            this.removeAttribute('open');
        if(value)
            this.setAttribute('open', value);
    }

    get isDisabled() {
        return this.hasAttribute('disabled');
    }

    set disableWith(value) {
        if(value === undefined)
            this.removeAttribute('open');
        if(value)
            this.setAttribute('open', value);
    }

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(this.content.cloneNode(true));
        this.style
        this.addEventListener('click', event => {
            if(this.isDisabled) {
                return
            }
            this.toggleDrawer();
        })
    }

    toggleDrawer() {
        if(this.isOpened) this.openWith(undefined);
        console.log('closed')
    }
}
window.customElements.define('app-drawer', AppDrawer);