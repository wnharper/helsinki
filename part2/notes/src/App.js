import Note from "./components/note";
import React, {useEffect, useState} from "react";
import noteServices from './services/notes'


const App = () => {
  
  const [notes, setNote] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteServices
      .getAll()
      .then(initialNotes => setNote(initialNotes))
      
  }, [])
  

  const notesToShow = showAll ? notes : notes.filter((note) => note.important === true)

  const filterNotes = () => setShowAll(!showAll)

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    noteServices
      .create(noteObject)
      .then(response => {
        setNote(notes.concat(response))
        setNewNote('')
      })

  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {

    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteServices
      .update(id, changedNote)
      .then(response => {
        setNote(notes.map(note => note.id !== id ? note : response))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNote(notes.filter(n => n.id !== id))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} /> )}
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
