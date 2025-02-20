import budgetlogo from './assets/budgetlogo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function navbar() {

    const Dashboard = "./Dashboard.jsx"
    const Login = "./Login.jsx"

    return (

        <>
        <Navbar expand = "lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand href="#"> <img src={budgetlogo}/> </Navbar.Brand> 
                <Navbar.Brand href={Dashboard}> SmartSpender </Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className='me-auto'>
                        <Nav.Link href="/budget-app/src/Dashboard.jsx">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <NavDropdown title="Get Started" id="basic-nav-dropdown">
                            <NavDropdown.Item href={Login}>Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Calculate Net Pay</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"> Create Budget  </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">... </NavDropdown.Item>
                            
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
        </>
    )

}

export default navbar