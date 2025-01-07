import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
import bg from './bg.png'

function App() {

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <span style={{color : 'red'}}>H</span>
            <span style={{color : 'orange'}}>A</span>
            <span style={{color : 'yellow'}}>N</span>
            <span style={{color : 'green'}}>S</span>
            <span style={{color : 'blue'}}>E </span>
            shop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{ backgroundImage : 'url(bg)' }}></div>

    </div>
  )
}

export default App
