import { GlobalProvider } from "./context/GlobalContent"
import Header from './Header'
import MainSection from './MainSection'

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <MainSection />
    </GlobalProvider>
  )
}

export default App
