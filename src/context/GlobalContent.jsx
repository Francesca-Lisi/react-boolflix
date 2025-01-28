import { useState, useContext, createContext } from 'react';
import axios from 'axios';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const apiUrl = 'https://api.themoviedb.org/3'
  const apiKey = '/a8100f91c8dd197e66a43b49fd62beb3'

  const [movies, setMovies] = useState([])



  const fetchMovies = () => {
    axios.get(`${apiUrl}/search/movie${apiKey}&query=ciao`)
      .then(res => {
        setMovies(res.data)
      })
  }
  console.log(res.data)
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