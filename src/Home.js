
import { Link, Outlet } from "react-router-dom"
import { NavLink, Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import './style.css';

function Home() {
    return (
        <>
                    {/* Navbar */}
            <Navbar bg="info" variant="light" expand="lg">
                <Container fluid>
                <Navbar.Brand href="/">Encounter Church of Nappanee</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/smallgroups" className="nav-link">Small Groups</Link>
                    <Link to="/team" className="nav-link">Team</Link>
                    <Link to="/splash2" className="nav-link">Splash2</Link>
                    <Link to="/give" className="nav-link">Give</Link>
                </Nav>
                    <Navbar.Text>
                        <a href="https://www.google.com/maps/place/107+E+Marion+St,+Nappanee,+IN+46550/@41.446247,-86.0031543,17z/data=!3m1!4b1!4m6!3m5!1s0x8816bc1b684224fd:0x22b8843eb277d283!8m2!3d41.446243!4d-86.000574!16s%2Fg%2F11cs8vs96l?entry=ttu">107 E Marion St, Nappanee, IN 46550</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
                </Navbar>

                <Stack gap={3} className="col-md-o mx-auto">
                    <Outlet />
                </Stack>

                <Navbar bg="info" variant="light" expand="lg">
                <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/update" className="nav-link">Update</Link>
                </Nav>
                <a href = "mailto: jim@compsecure.us">©2023 jim@compsecure.us</a>
                </Navbar.Collapse>
                </Container>
                </Navbar>

               
        </>
    )
}

export default Home