class ContentInput extends HTMLElement{
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
                display: block;
            }
            .section-input{
                width: 100%;
            }
            .content-input{
                display: flex;
            }
            form{
                margin-bottom: 20px;
            }
            input[type="text"], textarea{
                width: 100%;
                padding: 10px;
                margin-bottom: 10px;
                border: 1px solid #2d3e50;
                border-radius: 5px;
                transition: all 150ms ease-in;
            }
            input[type="text"]:hover,
            input[type="text"]:focus-visible {
                scale: 1.05;
                box-shadow: 0 2px 4px 2px #dedede;
            }
            textarea:hover,
            textarea:focus-visible {
                scale: 1.05;
                box-shadow: 0 2px 4px 2px #dedede;
            }
            button{
                padding: 10px 20px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all 150ms ease-in;
            }
            button:hover,
            button:focus-visible{
                background-color: #0056b3;
                scale: 1.05;
                box-shadow: 0 2px 4px 2px #dedede;
            }
        `
    }
    _emptyContent(){
        this._shadowRoot.innerHTML = ''
    }
    connectedCallback(){
        this.render()
        this._shadowRoot.querySelector('#add-note-form').addEventListener('submit', this.formSubmit.bind(this))
    }
    formSubmit(e){
        e.preventDefault()
        const title = this._shadowRoot.querySelector('#note-title').value
        const body = this._shadowRoot.querySelector('#note-desc').value
        const currentDate = new Date()
        const formVal = {
            id: this.generateRandom(),
            title: title,
            body: body,
            createdAt: currentDate.toISOString(),
            archived: false
        }
        this.dispatchEvent(new CustomEvent('save-data', { detail: formVal }))
    }
    generateRandom(){
        let result = 'notes-'
        const huruf = 'abcdefghijklmnopqrstuvwxyz'
        for(let i=1; i<=3; i++){
            result += i
            for(let j=0; j<1; j++){
                const randomHuruf = huruf.charAt(Math.floor(Math.random() * huruf.length))
                result += randomHuruf
            }
            if (i<3) {
                result += '-'
            }
        }
        return result
    }
    render(){
        this._emptyContent()
        this._updateStyle()
        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `
            <div class="content-input">
                <form id="add-note-form">
                    <input type="text" id="note-title" placeholder="Title" required autocomplete="off">
                    <textarea id="note-desc" placeholder="Write your note here" required></textarea>
                    <button type="submit">Simpan</button>
                </form>
            </div>
        `
    }
}
customElements.define('content-input', ContentInput)