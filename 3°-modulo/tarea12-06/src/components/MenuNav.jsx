import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from '../assets/logoRolling.png'

export default function MenuNav() {
    return (
        <Navbar  expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/formulario">Formulario</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

