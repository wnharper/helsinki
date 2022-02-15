import personService from '../services/persons'

// const handleDelete = (id) => {

//     const result = window.confirm('Do you really want to delete this person?')

//     if (result) {
//         personService
//         .del(id)
//         .then(console.log('Record deleted'))

//     }
    
// }

const Person = ({id, name, number, handleDelete}) => <li style={{padding:10}}>{name}  |  {number} <button onClick={() => handleDelete(id)}>Delete</button></li>

export default Person