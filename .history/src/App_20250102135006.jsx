import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav} from 'react-bootstrap'

function App() {

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <span style={{color : 'red'}}>H</span>
            <span style={{color : 'orange'}}>A</span>
            <span style={{color : 'yellow'}}>H</span>
            <span style={{color : 'green'}}>H</span>
            <span style={{color : 'blue'}}>H</span>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default App
