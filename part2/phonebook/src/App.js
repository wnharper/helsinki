import React, { useState, useEffect } from 'react'
import PeopleList from './components/peopleList'
import Input from './components/formInput'
import personService from './services/persons'


const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response))
      
  }, [rerender])

  // OnChange handlers
  const handleAddPerson = (event) => setNewName(event.target.value)
  const handleAddNumber = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setNewSearch(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    let duplicateId = 0
    let duplicate = false

    persons.forEach(person => {
      if (person.name === newName) {
          duplicateId = person.id
          duplicate = true 
      }
    })

    const newPersonObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    }

    if (duplicate) {
      if (window.confirm(`${newPersonObject.name} is already in the phonebook, replace old number with new one?`)) {
        
        newPersonObject.id = duplicateId

        personService
          .update(duplicateId, newPersonObject)
          .then(setRerender(!rerender))
      } 
    } else {
    
      personService
        .create(newPersonObject)
        .then(response => setPersons(persons.concat(response)))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id) => {

    const result = window.confirm('Do you really want to delete this person?')

    if (result) {
        personService
        .del(id)
        .then(persons.filter(person => person.id !== id))
        setRerender(!rerender)

    }
    
}


  return (
    <div>
      <h2>Phonebook</h2>
        <Input label={'Search'} value={newSearch} onChange={handleSearch} />

      <h2>Add new</h2>
      <form onSubmit={addPerson}>
          <Input label={'Name'} value={newName} onChange={handleAddPerson} />
          <Input label={'Number'} value={newNumber} onChange={handleAddNumber} />
          <button type="submit">add</button>
      </form>

      <button onClick={() => handleDelete(6)}>test</button>

      
      <h2>Numbers</h2>
      <PeopleList arr={persons} searchTerm={newSearch} handleDelete={handleDelete}/>

    </div>
  )
}

export default App