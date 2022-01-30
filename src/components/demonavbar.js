import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function DemoNavbar() {
    return (<Navbar
        bg="dark"
        className="navbar-expand-lg navbar-dark sticky-top"
        expand="lg"
    >
        <Container>
            <Navbar.Brand className="fs-2">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {" "}
                    <Link
                        className="fs-3 mx-2"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/home"
                    >
                        Home
                    </Link>
                    <Link
                        className="fs-3 mx-2"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/search"
                    >
                        SearchFlights
                    </Link>
                    <Link
                        className="fs-3 mx-2"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/add"
                    >
                        AddFlights
                    </Link>{" "}
                    <Link
                        className="fs-3 mx-2"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/"
                    >
                        Login
                    </Link>{" "}
                    <Link
                        className="fs-3 mx-2"
                        style={{ textDecoration: "none", color: "white" }}
                        to="/register"
                    >
                        Register
                    </Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

export default DemoNavbar;