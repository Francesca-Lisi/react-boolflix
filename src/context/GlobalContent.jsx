import { useState, useContext, createContext } from 'react';
import axios from 'axios';


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const apiUrl = import.meta.env.VITE_API_KEY
  const apiKey = import.meta.env.VITE_BASE_API_URL

  const initialResults = {
    movie: [],
    tv: []
  }

  const [searchResults, setSearchResults] = useState(initialResults)

  const search = (type) => {


    const params = {
      apiKey,
      query: 'simpson',
      language: 'en-EN'
    }

    axios.get(`${apiUrl}search/${type}`, { params })
      .then(res => {
        console.log(res.data)
      })

      .catch(err => {
        console.log('Errore: ', err.message)
      })
  }

  const value = { search }


  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }