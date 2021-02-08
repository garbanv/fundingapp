import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => (
<Navbar bg="light" expand="lg">
    <Container>
  <Navbar.Brand><Link to="/"><img src="https://nblch.org/wp-content/themes/nblca/images/logo_full.svg" className="" style={{maxWidth:250 +'px'}}/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Link to="/page-2" className="mr-3 text-black">Upload Page</Link>
      <Link to="/page-3" className="text-black"> Download Page</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)



export default Header
