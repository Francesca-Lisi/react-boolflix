import Filters from './components/filter/Filters'


const Header = () => {
  return (
    <header className='d-flex justify-content-between text-white bg-dark p-2'>
      <h1>BOOLFLIX</h1>
      <Filters />
    </header>
  )
}

export default Header