import { useState, useContext, createContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const [movies, setMovies] = useState([])

  const apiKey = '/a8100f91c8dd197e66a43b49fd62beb3'

  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie${apiKey}`)
      .then(res => {
        setMovies(res.data)
        console.log(res.data)
      })
  }

  return (
    <GlobalContext.Provider value={{ movies, fetchMovies }}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }