import { useState } from "react"
import countriesService from "./services/countries"


const CountriesDisplay = ({ countries, showCountry }) => {
  return (
    <div>
      {countries.map(country =>
        <li key={country["name"]["common"]}>
          {country["name"]["common"]}
          <button onClick={() => showCountry(country["name"]["common"])}>show</button>
        </li>)}
    </div>
  )
}


const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country["name"]["common"]}</h1>
      <p>Capital: {country["capital"]}<br />Area: {country["area"]}</p>

      <p>Languages:</p>
      <ul>
        {Object.values(country["languages"]).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country["flags"]["png"]} alt="flag of country" />
    </div>
  )
}

const Filter = ({ onChange }) => {
  return (
    <div>
      <input type="text" onChange={onChange}></input>
    </div>
  )
}
const App = () => {

  const [countries, setCountries] = useState([])

  const handleFilterChange = (event) => {
    event.preventDefault()
    if (event.target.value !== "") {
      countriesService
        .getCountries(event.target.value)
        .then(response => {
          setCountries(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  const showCountry = (countryName) => {
    countriesService
      .getCountries(countryName)
      .then(response => {
        if (response.data.length === 1) {
          setCountries(response.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  if (countries.length === 1) {
    return (
      <div>
        <Filter onChange={handleFilterChange} />
        <CountryInfo country={countries[0]} />
      </div>
    )
  } else if (countries.length > 10) {
    return (
      <div>
        <Filter onChange={handleFilterChange} />
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <div>
        <Filter onChange={handleFilterChange} />
        <CountriesDisplay countries={countries} showCountry={showCountry} />
      </div>
    )
  } else {
    return (
      <div>
        <Filter onChange={handleFilterChange} />
      </div>
    )
  }
}

export default App
