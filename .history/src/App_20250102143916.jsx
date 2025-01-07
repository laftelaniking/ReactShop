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
          <img src='https://www.google.com/imgres?q=%EC%B9%A8%EC%B0%A9%EB%A7%A8&imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2FVaomx_a8Qs9bDHS09zsQBB8BG5rY3LWnvb0zcK4oqThz7oT4PCeZQYyMSsQLGh8pmAwlVAmYew%3Ds900-c-k-c0x00ffffff-no-rj&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCUj6rrhMTR9pipbAWBAMvUQ&docid=f5BcguhUfve0sM&tbnid=Ah94Kd_2Xyr76M&vet=12ahUKEwiN_cqpqdaKAxX7fPUHHeodJcQQM3oECGAQAA..i&w=900&h=900&hcb=2&ved=2ahUKEwiN_cqpqdaKAxX7fPUHHeodJcQQM3oECGAQAA' width='80%'></img>
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
