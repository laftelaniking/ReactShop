import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import bg from './bg.png'
import data from './data.js'
import { Routes, Route, Link } from 'react-router-dom'

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
          {
            shoes.map(function(a, i){
              return(
                <Shu shoes={shoes} i={i}/>
              )
            })
          }
        </Row>
      
      <Routes>
        <Route path='/detail' element={ <div>상세페이지임</div> } />
        <Route path='/about' element={ <div>어바웃페이지임</div> } />

        <Route path='/' element={ <div>메인페이지임</div> } />

      </Routes>

    </div>
  )
}

export default App


function Shu(props){

  return(
    <Col>  
      <img src={ import.meta.env.BASE_URL + 'shoes' +(props.i+1) +'.jpg'} width='80%'/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
    </Col>
  )
}



