class NoteList extends HTMLElement{
    _shadowRoot = null
    _style = null
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
        this._style = document.createElement('style')
        this.render()
    }
    _updateStyle(){
        this._style.textContent = `
            :host{
                margin-block: 1rem;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                column-gap: 2%;
                row-gap: 24px;
            }
        `
    }
    connectedCallback(){
        console.log('test');
        this.addEventListener('save-data', this.handleSaveNote.bind(this))
    }
    disconnectedCallback(){
        this.removeEventListener('save-data', this.handleSaveNote)
    }
    handleSaveNote(e){
        console.log(e);
        const newData = e.detail
        this.addNoteToList(newData)
        this.render()
    }
    addNoteToList(newNote){
        if (!this.note) {
            this.note = []
        }
        this.note.push(newNote)
    }
    _emptyContent(){
        this._shadowRoot.innerHTML = ''
    }
    render(){
        this._emptyContent()
        this._updateStyle()
        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `
            <slot></slot>
        `
    }
}
customElements.define('note-list', NoteList)