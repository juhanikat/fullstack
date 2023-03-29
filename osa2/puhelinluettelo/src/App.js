import { useState } from 'react'


const Filter = (props) => {
  return (
    <div>
      filter: <input onChange={props.onChange} value={props.value}></input>
    </div>
  )
}

const AddPerson = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name: <input onChange={props.onNameChange} value={props.nameValue} />
      </div>
      <div>
        number : <input onChange={props.onNumberChange} value={props.numberValue} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const DisplayPersons = (props) => {
  return (
    <div>
      {props.filter.length === 0
        ? props.persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)
        : props.acceptedPersons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}

    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState("")
  const [acceptedPersons, setAcceptedPersons] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const person = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(person))
      setNewName("")
      setNewNumber("")
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const result = persons.filter(
      person => person.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setAcceptedPersons(result)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} value={newFilter} />
      <h2>Add new person</h2>
      <AddPerson
        onSubmit={addPerson}
        onNameChange={handleNameChange}
        nameValue={newName}
        onNumberChange={handleNumberChange}
        numberValue={newNumber} />
      <h2>Numbers</h2>
      <DisplayPersons filter={newFilter} persons={persons} acceptedPersons={acceptedPersons} />
    </div>
  )
}

export default App