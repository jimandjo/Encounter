
import { Link, Outlet } from "react-router-dom"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"

function Home() {
    return (
        <>
                    {/* Navbar */}
            <Navbar bg="warning" variant="light" expand="lg">
                <Container fluid>
                <Navbar.Brand href="/">Encounter Church of Nappanee</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/smallgroups" className="nav-link">Small Groups</Link>
                    <Link to="/team" className="nav-link">Team</Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>

                <Stack gap={3} className="col-md-10 mx-auto">
                    <Outlet />
                </Stack>

               
        </>
    )
}

export default Home