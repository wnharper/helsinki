import React, { useState } from 'react'
import PeopleList from './components/peopleList'
import Input from './components/formInput'
import axios from 'axios'


const App = (props) => {

  const hook = (response) => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }
  
  React.useEffect(hook, [])

  const [persons, setPersons] = useState(props.phonebook) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  // OnChange handlers
  const handleAddPerson = (event) => setNewName(event.target.value)
  const handleAddNumber = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setNewSearch(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    let duplicate = false

    persons.forEach(person => {
      if (person.name === newName) {
          duplicate = true
          window.alert(`${newName} is already in the phonebook`)  
      }
    })

    if (!duplicate) {
      const newPersonObject = {
        name: newName,
        id: persons.length + 1,
        number: newNumber
      }
      setPersons(persons.concat(newPersonObject))
    }
    setNewName('')
    setNewNumber('')
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
      
      <h2>Numbers</h2>
      <PeopleList arr={persons} searchTerm={newSearch}/>

    </div>
  )
}

export default App