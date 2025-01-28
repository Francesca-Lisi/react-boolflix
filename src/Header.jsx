import Filters from './components/filter/Filters'


const Header = () => {
  return (
    <header className='d-flex justify-content-between align-item-center text-white bg-dark p-3'>
      <h1 className='text-danger'>BOOLFLIX</h1>
      <Filters />
    </header>
  )
}

export default Header