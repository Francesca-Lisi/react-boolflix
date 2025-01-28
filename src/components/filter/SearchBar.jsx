import { useGlobalContext } from '../../context/GlobalContent'

const SearchBar = () => {
  const { movies } = useGlobalContext()
  return (
    <div className="input-group">
      <input type="text" className="form-control " placeholder="Inserisci titolo" aria-label="title" aria-describedby="title"></input>
      <button className="btn btn-danger" onClick={console.log('ciao')} type="submit" id="title">Cerca</button>
    </div>

  )
}

export default SearchBar