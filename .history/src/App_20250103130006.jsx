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
      
      
      <Routes>
        <Route path='/detail' element={ 
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={ import.meta.env.BASE_URL + 'shoes' +(props.i+1) +'.jpg'} width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button> 
              </div>
            </div>
          </div> 
        } />
        <Route path='/about' element={ <div>어바웃페이지임</div> } />

          {/* path='/'는 메인페이지입니다  */}
        <Route path='/' element={ 
          <div>
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
          </div> 
        } />

      </Routes>

      <Link to='/'>홈</Link>
      <p></p>
      <Link to='/detail'>상세페이지</Link>

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



