import personService from '../services/persons'

const Person = ({id, name, number, handleDelete}) => <li style={{padding:10}}>{name}  |  {number} <button onClick={() => handleDelete(id, name)}>Delete</button></li>

export default Person