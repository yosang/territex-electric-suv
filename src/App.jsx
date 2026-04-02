import { Navbar, NavItems, NavLogo, NavLink, Button } from '@yosang/react-ui'
import Home from './Home'

function App() {

  return (
    <>
      {/* BrowserWrapper */}

      {/* Navbar */}
      <Navbar style={{ fontWeight: 800 }} sticky={true}>

        <NavLogo src='https://i.imgur.com/PQuW45F.png' />
        <NavItems >
          <NavLink>Modeller</NavLink>
          <NavLink>Service & Support</NavLink>
          <NavLink>Kampanjer</NavLink>
          <NavLink>Forhandler</NavLink>
        </NavItems>

        <NavItems >
          <Button variant='secondary'>Få tilbud</Button>
          <Button variant='tertiary'>Prøvekjøring</Button>
        </NavItems>

      </Navbar>
      {/* Routes */}
      <Home />

      {/* Footer */}


      {/* BrowserWrapper */}
    </>
  )
}

export default App
