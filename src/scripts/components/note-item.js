class NoteItem extends HTMLElement{
    _shadowRoot = null
    _style = null
    _notes = {
        id: null,
        title: null,
        body: null,
        createdAt: null,
        archived: false
    }
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
        this._style = document.createElement('style')
    }
    _emptyContent(){
        this._shadowRoot.innerHTML = ''
    }
    set note(val){
        this._notes = val
        this.render()
    }
    get note(){
        return this._notes
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
            .card-list{
                width: 100%;
                height: 290px;
                border: 1px solid black;
                border-radius: 8px;
                transition: all 150ms ease-in;
                padding: 6px;
            }
            .card-list:hover,
            .card-list:focus-visible {
                scale: 1.05;
                box-shadow: 0 2px 4px 2px #dedede;
            }
            .note-title{
                word-wrap: break-word;
                font-weight: bolder;
                text-align: center;
                font-size: 15px;
                border-bottom: 1px solid #000;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                -webkit-box-align: center;
                -webkit-box-pack: center;
            }
            .note-desc{
                word-wrap: break-word;
                height: 150px;
                margin-left: 5px;
                font-size: 15px;
            }
            .card-date{
                display: flex;
                font-size: 13px;
                justify-content: space-between;
                margin: 5px;
                border-top: 1px solid #000;
            }
            @media screen and (max-width: 1400px) {
                .card-date{
                  font-size: 12px;
                }
            }
            @media screen and (max-width: 1200px) {
                .content-notes {
                  grid-template-columns: repeat(5, 1fr);
                }
            }
            @media screen and (max-width: 1180px) {
                .card-date{
                  font-size: 11px;
                }
            }
            @media screen and (max-width: 1084px) {
                .card-date{
                  font-size: 11px;
                }
            }
            @media screen and (max-width: 1040px) {
                .card-date{
                  font-size: 10.5px;
                }
                .content-notes {
                  column-gap: 3%;
                }
            }
            @media screen and (max-width: 992px) {
                .content-notes {
                  grid-template-columns: repeat(4, 1fr);
                }
            }
            @media screen and (max-width: 790px) {
                .card-date{
                  font-size: 10px;
                }
                .content-notes {
                  column-gap: 3%;
                }
            }
            @media screen and (max-width: 768px) {
                .content-notes {
                  grid-template-columns: repeat(3, 1fr) !important;
                  column-gap: 3% !important;
                }
            }
            @media screen and (max-width: 576px) {
                .content-notes {
                  grid-template-columns: repeat(2, 1fr);
                  column-gap: 5%;
                }
            }
            @media screen and (max-width: 320px) {
                .content-notes {
                  grid-template-columns: repeat(1, 1fr);
                }
            }
        `
    }
    render(){
        this._emptyContent()
        this._updateStyle()
        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `
            <div class="card-list">
                <p class="note-title">"${this._notes.title}"</p>
                <p class="note-desc">"${this._notes.body}"</p>
                <div class="card-date">
                    <p>Dibuat</p>
                    <p>"${this._notes.createdAt}"</p>
                </div>
            </div>
        `
    }
}
customElements.define('note-item', NoteItem)