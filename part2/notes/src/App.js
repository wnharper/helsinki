import Note from "./components/note";
import React from "react";
import axios from "axios";


const App = () => {
  
  const [notes, setNote] = React.useState([])
  const [newNote, setNewNote] = React.useState('a new note...')
  const [showAll, setShowAll] = React.useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(res => {
        setNote(res.data)
        console.log('promise fulfilled')
  })
  }

  React.useEffect(hook, [])
  
  console.log('render', notes.length, 'notes')

  const notesToShow = showAll ? notes : notes.filter((note) => note.important === true)

  const filterNotes = () => setShowAll(!showAll)

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNote(notes.concat(noteObject))
    setNewNote('add a note...')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => <Note key={note.id} content={note.content} /> )}
      </ul>
      <button onClick={filterNotes}>Show {showAll ? 'important' : 'all'}</button>
    
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
