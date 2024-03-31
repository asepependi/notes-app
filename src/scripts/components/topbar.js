class TopBar extends HTMLElement{
    _shadowRoot = null
    _style = null
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
        this._style = document.createElement('style')
    }
    _updateStyle(){
        this._style.textContent = `
            :host{
                display: 'block'
            }
            .header{
                padding: 12px;
                background-color: #2d3e50;
                display: flex;
            }
            .wrapper{
                padding-block: 32px;
                padding-inline: 24px;
            }
            .logo{
                font-size: 2rem;
                text-decoration: inherit;
                color: #ffff;
            }
        `
    }
    _emptyContent(){
        this._shadowRoot.innerHTML = ''
    }
    connectedCallback(){
        this.render()
    }
    render(){
        this._emptyContent()
        this._updateStyle()
        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `
            <div class="header wrapper">
                <a href="#" class="logo">Note Apps</a>
            </div>
        `
    }
}
customElements.define('top-bar', TopBar)