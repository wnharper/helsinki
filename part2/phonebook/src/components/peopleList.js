import Person from "./person";

const search = ({arr, searchTerm}) => {

    return arr.filter((item) => {
      return (
        item['name'].toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      )
    })
  }

const PeopleList = ({arr, searchTerm, handleDelete}) => 
search({arr, searchTerm}).map(person => <Person key={person.id} id={person.id} name={person.name} number={person.number} handleDelete={handleDelete} />)

export default PeopleList