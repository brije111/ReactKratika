import React from "react";
//import PropTypes from "prop-types";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

const NavBarComponent = props => {
  
  return (
    <div>
      <Navbar bg="info"  variant="dark" fixed="top">
      
        <Nav className="mr-auto" >
          <Nav.Link style={{color: 'white'}} href="#home">Sony Products</Nav.Link>

        </Nav>
        <Nav>
        <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/cart"
          >
      <div >
        <span style={{color:'white'}} className="m-2 h3">Cart</span>
        {Object.keys(props.cart).length===0?<div></div>:<Badge variant="warning">{Object.keys(props.cart).length}</Badge>}
        </div>
        </Link>
    </Nav>
      </Navbar>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    cart: state.crt.cart
  };
};

export default connect(mapStateToProps)(NavBarComponent);
