import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavbarComponent = ()=> {
  return(
    <Navbar expand="lg" className='px-5 py-4'>
      <Container>
        <Navbar.Brand href="#home" className='fw-semibold'>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{fontSize:"20px"}}>
            <Nav.Link><Link to='/' className='text-decoration-none text-light' >Home</Link></Nav.Link>
            <Nav.Link><Link to='/work' className='text-decoration-none text-light'>Work</Link></Nav.Link>
            <Nav.Link><Link to='/education' className='text-decoration-none text-light'>Education</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}
export default NavbarComponent;