import axios from "axios"


const baseUrl = "https://restcountries.com/v3.1/name/"


const getCountries = (name) => {
    return axios.get(baseUrl + name)
}


const countriesService = { getCountries }
export default countriesService