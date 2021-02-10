import React,{useState} from "react"
import { Link, navigate } from "gatsby"
import { Container, Row, Col,Button, Form } from "react-bootstrap"
import Logo from '../images/logo.png'
import Layout from "../components/layout"
import axios from 'axios';
import image1 from '../images/undraw_Upload_re_pasx.png';
import Loader from '../components/loader'

const IndexPage = () => {
  const [userData, setUserData] = useState({
    identifier: "",
    password: "",
  })

  const [isLoading,setIsLoading]=useState(false)

  const handleLogin = () =>{
    setIsLoading(true)
    // Request API.
    axios
    .post('https://fundingwebappbackend-dewbn.ondigitalocean.app/auth/local', {
      identifier: userData.identifier,
      password: userData.password,
    })
    .then(response => {

      // Handle success.
      // console.log('Well done!');
      // console.log('User profile', response.data.user);
      // console.log('User token', response.data.jwt);
      typeof window !== 'undefined' && window.localStorage.setItem('user', response.data.user.username);
      response.data.jwt ? navigate("/page-2") : console.log("error")
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
     
    });
  }

  return (
  
      <section className="bg-light">
      <Container className="">
        <Row className="rounded  vh-100 d-flex  align-items-center">
          <div>
            <Row>
        <Col md={6} className=" p-5 bg-white">
            <Row>
            <div className="pt-1 pb-3 text-center "> 
            <img src="https://nblch.org/wp-content/themes/nblca/images/logo_full.svg" className="" style={{maxWidth:250 +'px'}}/>
            </div>  
            </Row>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email account</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={(e)=>{
                  setUserData({...userData,identifier:e.target.value})
                }}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{
                  setUserData({...userData,password:e.target.value})
                }}/>
              </Form.Group>
              <Button variant="primary" onClick={handleLogin}>
                {isLoading ? <Loader/> : 'Login'}
              </Button>
            </Form>
          </Col> 
          <Col md={6} className="bg-purple">
            <div className="py-3">
            <h5 className="text-white text-center">File uploader</h5>
            <img src={image1}/>
            </div>
          </Col>
          </Row>
          </div>      
        </Row>
      </Container>
      </section>

  )
}

export default IndexPage
