import { Navbar, NavItems, NavLogo, NavLink, Button } from '@yosang/react-ui'

function App() {
    const isMobileScreen = window.innerWidth < 600;
    return (
        <Navbar style={{ fontWeight: 800 }} sticky={!isMobileScreen}>

            <NavLogo src='https://i.imgur.com/PQuW45F.png' />
            <NavItems >
                <NavLink animated={{ left: true }}>Modeller</NavLink>
                <NavLink animated={{ left: true }}>Service & Support</NavLink>
                <NavLink animated={{ left: true }}>Kampanjer</NavLink>
                <NavLink animated={{ left: true }}>Forhandler</NavLink>
            </NavItems>

            <NavItems >
                <Button style={{ backgroundColor: "black", display: "flex", justifyContent: "center", height: "3rem", fontWeight: "550" }} rippleEffect={false}>Få tilbud</Button>
                <Button variant='tertiary' style={{ display: "flex", justifyContent: "center", height: "3rem", fontWeight: "500" }} rippleEffect={false} >Prøvekjøring</Button>
            </NavItems>

        </Navbar>
    )
}

export default App
