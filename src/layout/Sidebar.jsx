import { Navbar, Drawer, NavItems, NavLogo, NavLink, Button, MenuIcon, Container } from '@yosang/react-ui'
import { useState } from 'react';

function App() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar sticky={true} onClick={() => setOpen(true)}>
                <NavLink asListItem={false}>
                    <MenuIcon />
                </NavLink>
            </Navbar>

            <Drawer isOpen={open} onClose={() => setOpen(false)} side='left' >
                <Container direction='vertical' style={{ height: "90vh", justifyContent: "space-between" }}>
                    <div>
                        <NavLogo src='https://i.imgur.com/PQuW45F.png' />
                        <NavItems>
                            <NavLink animated={{ left: true }}>Modeller</NavLink>
                            <NavLink animated={{ left: true }}>Service & Support</NavLink>
                            <NavLink animated={{ left: true }}>Kampanjer</NavLink>
                            <NavLink animated={{ left: true }}>Forhandler</NavLink>
                        </NavItems>
                    </div>

                    <NavItems>
                        <Button style={{ backgroundColor: "black", display: "flex", justifyContent: "center", height: "3rem", fontWeight: "550" }} rippleEffect={false}>Få tilbud</Button>
                        <Button variant='tertiary' style={{ display: "flex", justifyContent: "center", height: "3rem", fontWeight: "500" }} rippleEffect={false} >Prøvekjøring</Button>
                    </NavItems>
                </Container>

            </Drawer>
        </>
    )
}

export default App
