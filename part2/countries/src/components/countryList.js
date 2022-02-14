import Country from "./country"
import FullCountry from "./fullCountry"

const search = ({arr, searchTerm}) => {

    return (
         arr.filter((item) => item.name.common.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
         )
  }

const doSomthing = () => console.log('Yes!')

const CountryList = ({arr, searchTerm}) => {

    const list = search({arr, searchTerm})

    if (list.length > 10) {
        return (
            <div>Too many results to display</div>
        )}
    if (list.length === 1) {
        return (
            list.map(country => <FullCountry key={country.cca3} name={country.name.common} capital={country.capital} 
                population={country.population} languages={country.languages} flag={country.flags.png} lat={country.latlng[0]} long={country.latlng[1]} />)

        )
    }
    
    return (
            list.map(country => <div><Country key={country.cca3} name={country.name.common} /> </div>)
        )
    }

export default CountryList