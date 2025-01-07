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
      <Container>
        <Row>
          {
            shoes.map(function(a, i){
              return(
                <Shu shoes={shoes} i={i}/>
              )
            })
          }
        </Row>
      </Container>
      
      <Routes>
        <Route></Route>
      </Routes>



    </div>
  )
}

export default App


function Shu(props){
  console.log(props)
  return(
    <>
      <Col>  
        <img src={ import.meta.env.BASE_URL + 'shoes' +(props.i+1) +'.jpg'} width='80%'/>
        <h4>{props.shoes[props.i].title}</h4>
        <p>{props.shoes[props.i].content}</p>
      </Col>
    </>
  )
}



