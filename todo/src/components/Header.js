import React from 'react';
import { 
  Navbar,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form,
} from 'react-bootstrap';

class Header extends React.Component {

  render() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">ToDo管理</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br></br>
      </div>
    );
  }
}

export default Header