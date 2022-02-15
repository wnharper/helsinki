import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonNote = {
    "id": 22,
    "content": "Hard coded note",
    "date": "2022-05-30T15:39:34.091Z",
    "important": false

  }
  return request.then(response => response.data.concat(nonNote))
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll, 
  create, 
  update 
}