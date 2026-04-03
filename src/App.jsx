import Navbar from './layout/Navbar'
import PageFooter from './layout/PageFooter'
import Home from './pages/Home'
import useIsMobile from './utils/useIsMobile'
import Sidebar from './layout/Sidebar'

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <Sidebar /> : <Navbar />}

      <Home />
      <PageFooter />
    </>
  )
}

export default App
