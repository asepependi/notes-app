class TitleSection extends HTMLElement{
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
            .title-section{
                display: grid;
                align-items: center;
                justify-content: center;
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
            <div class="title-section">
                <h2>List Notes</h2>
            </div>
        `
    }
}
customElements.define('title-section', TitleSection)