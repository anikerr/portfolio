import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ siteTitle, pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar" className="shadow-sm">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            {" "}
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              AK
            </Link>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="#about" className="nav-links">
              <Nav.Link as="span" eventKey="about">
                About
              </Nav.Link>
            </Link>
            <Link to="#projects" className="nav-links">
              <Nav.Link as="span" eventKey="projects">
                Projects
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

CustomNavbar.propTypes = {
  siteTitle: PropTypes.string,
}

CustomNavbar.defaultProps = {
  siteTitle: ``,
}

export default CustomNavbar
