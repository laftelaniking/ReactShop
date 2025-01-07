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
        {/* <img src={ import.meta.env.BASE_URL + 'shoes1.jpg'} width='80%'/> */}
        {shoes.map(function(a, i){
          // console.log(i)
          return(
            <div key={i}>
              <Shu shoes={shoes} i={i}/>
            </div>
            
          )
          
          
        })}
            
      </Row>
    </div>
  )
}

export default App


function Shu(props){
  console.log(props.i+1)
  return(
    <Col>
      <img src={ import.meta.env.BASE_URL + 'shoes'+{i}+.jpg'} width='80%'/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
    </Col>
  )
}



