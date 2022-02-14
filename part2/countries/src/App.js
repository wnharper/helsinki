import React, {useEffect, useState} from "react"
import Search from "./components/search"
import axios from "axios"
import CountryList from "./components/countryList"


const App = () => {

// states
const [countries, setCountries] = useState([])
const [newSearch, setSearch] = useState('')

// handlers
const handleSearch = (event) => {
    setSearch(event.target.value)  
    
}

// hooks
const countryHook = () => {
  axios
    .get('https://restcountries.com/v3.1/all')
    .then((response) => {
        console.log(response)
        setCountries(response.data)
    
    })
}

useEffect(countryHook, [])

  return (
    <div>
    <h1>Countries</h1>
    <Search label={'Find countries'} value={newSearch} onChange={handleSearch} />
      -
    
    <CountryList arr={countries} searchTerm={newSearch}/>
    </div>
    
    
  )
}

export default App;
