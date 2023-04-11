import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const createPerson = newPerson => {
    return axios.post(baseUrl, newPerson)
}

const getPersons = () => {
    return axios.get(baseUrl)
}

const deletePerson = id => {
    const url = `${baseUrl}/${id}`
    return axios.delete(url)
}

const changePerson = (id, newPerson) => {
    const url = `${baseUrl}/${id}`
    return axios.put(url, newPerson)
}


export default { createPerson: createPerson, getPersons: getPersons, deletePerson: deletePerson, changePerson: changePerson }