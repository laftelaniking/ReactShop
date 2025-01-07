import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import bg from './bg.png'
import data from './data.js'

function App() {

  let [shoes] = useState(data);

  return (
    <div className='App'>
  
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
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
          <img src={ import.meta.env.BASE_URL + 'shoes1.jpg'} width='80%'/>
          <h4>{shoes[0].title}</h4>
          <p>상품정보</p>
        </Col>
        <Col>
          <img src='/shoes2.jpg' width='80%'></img>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col>
          <img src='/shoes3.jpg' width='80%'></img>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
      </Row>
    </div>
  )
}

export default App
