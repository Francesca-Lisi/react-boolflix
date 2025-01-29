import { useGlobalContext } from '../../context/GlobalContent'
import { useState } from 'react'



const SearchBar = () => {
  const { movies, search } = useGlobalContext()


  return (
    <div className="input-group">
      <input type="text" className="form-control " placeholder="Inserisci titolo" aria-label="title" aria-describedby="title"></input>
      <button className="btn btn-danger" onClick={search} type="submit" id="title">Cerca</button>
    </div>

  )
}

export default SearchBar