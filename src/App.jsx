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
          <Button style={{ backgroundColor: "black", display: "flex", justifyContent: "center", height: "3rem", fontWeight: "550" }} rippleEffect={false}>Få tilbud</Button>
          <Button variant='tertiary' style={{ display: "flex", justifyContent: "center", height: "3rem", fontWeight: "500" }} rippleEffect={false} >Prøvekjøring</Button>
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
