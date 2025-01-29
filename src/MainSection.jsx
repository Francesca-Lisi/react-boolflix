import { useEffect } from "react"
import { useGlobalContext } from './context/GlobalContent'



const MainSection = () => {

  const { search, searchResult } = useGlobalContext();

  useEffect(() => {
    search('movie')
    search('tv')
  }, [])

  return (
    <div>
      {/* <ResultSection title= data=/> */}
    </div>
  )
}

export default MainSection