import React, { useState, useEffect } from 'react'
import PeopleList from './components/peopleList'
import Input from './components/formInput'
import personService from './services/persons'
import Notification from './components/notification'
import ErrorMsg from './components/errorMsg'
import './index.css'


const App = () => {


  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [rerender, setRerender] = useState(false)
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response))
      
  }, [rerender])

  // OnChange handlers
  const handleAddPerson = (event) => setNewName(event.target.value)
  const handleAddNumber = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setNewSearch(event.target.value)

  const notify = (message) => {
    setNotification(message)
    setTimeout(() => setNotification(null), 4000)
  }

  const errorNotify = (message) => {
    setError(message)
    setTimeout(() => setError(null), 4000)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const duplicateName = persons.find(p => p.name === newName)

    const newPersonObject = {
      id: persons.length + 1,
      name: newName,      
      number: newNumber
    }


    if (duplicateName) {
      if (window.confirm(`${newPersonObject.name} is already in the phonebook, replace old number with new one?`)) {
        
        newPersonObject.id = duplicateName.id

        personService
          .update(duplicateName.id, newPersonObject)
          .then(setRerender(!rerender))
          notify(`${newPersonObject.name}'s number was updated`)
          
      } 
    } else {
    
      personService
        .create(newPersonObject)
        .then(response =>  {
          setPersons(persons.concat(response))
          notify(`${newPersonObject.name} was added to the phonebook`)
        })
        
        .catch (error => errorNotify('Name already exists in phonebook'))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id, name) => {

    const result = window.confirm('Do you really want to delete this person?')

    if (result) {
        personService
        .del(id)
        .then(() => {
          persons.filter(person => person.id !== id)
          setRerender(!rerender)
          notify(`${name} was deleted`)
        })
        .catch (error => errorNotify('Person already deleted from phonebook'))
        

    }
  
  
  
}


  return (
    <div>
      <h2>Phonebook</h2>

        <Notification message={notification} type/>
        <ErrorMsg message={error} type/>

        <Input label={'Search'} value={newSearch} onChange={handleSearch} />

      <h2>Add new</h2>
      <form onSubmit={addPerson}>
          <Input label={'Name'} value={newName} onChange={handleAddPerson} />
          <Input label={'Number'} value={newNumber} onChange={handleAddNumber} />
          <button type="submit">add</button>
      </form>
      
      <h2>Numbers</h2>
      <PeopleList arr={persons} searchTerm={newSearch} handleDelete={handleDelete}/>

    </div>
  )
}

export default App