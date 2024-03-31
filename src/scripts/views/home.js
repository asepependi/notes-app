import Notes from "../data/notes.js"

const home = () => {
    const noteListContainer = document.querySelector('#content-notes')
    const noteListEl = noteListContainer.querySelector('note-list')

    const showNotes = () => {
        displayResult(Notes);
    };

    const displayResult = (notesData) => {
        const noteItems = notesData.map((note) => {
            const noteItem = document.createElement('note-item')
            noteItem.note = note

            return noteItem
        })
        noteListEl.append(...noteItems)
    }

    showNotes()
}
export default home