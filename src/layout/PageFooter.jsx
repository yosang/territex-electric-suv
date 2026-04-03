import { Container, Footer, NavItems, NavLink, FacebookLogo, InstagramLogo } from '@yosang/react-ui'

export default function App() {
    return (
        <>
            <Container centered={true} >

                <Footer style={{ width: "90%" }}>
                    <NavItems direction='vertical'>
                        <h3>Om oss</h3>
                        <NavLink asListItem={false}>Om TERRITEX</NavLink>
                        <NavLink asListItem={false}>Jobb hos oss</NavLink>
                        <NavLink asListItem={false}>Bærekraft</NavLink>
                    </NavItems>
                    <NavItems direction='vertical'>
                        <h3>Sosiale Medier</h3>
                        <NavItems>
                            <NavLink asListItem={false}>
                                <FacebookLogo />
                            </NavLink>
                            <NavLink asListItem={false}>
                                <InstagramLogo />
                            </NavLink>
                        </NavItems>
                    </NavItems>
                </Footer>
                <Container >
                    <p>©  2026 TERRITEX</p>
                </Container>
            </Container>
        </>
    )
}