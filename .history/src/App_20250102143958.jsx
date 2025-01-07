import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
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
      <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')' }}></div>
      <Row>
        <Col>
          <img src='data:image/jpeg;base64,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' width='80%'></img>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col>
          <img src='./src/shoes2.jpg' width='80%'></img>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col>
          <img src='./src/shoes3.jpg' width='80%'></img>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
      </Row>
    </div>
  )
}

export default App
