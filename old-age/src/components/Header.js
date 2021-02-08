import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import '../static/css/header.css';
import { Link } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [islogin, setIslogin] = useState(false);

  const iss = () => {
    setIslogin(true);
  };

  // const ifLogin = () => {
  //   localStorage.removeItem("store_id")
  //   setIslogin(false)
  //   alert('You are logged out.')
  // };

  // const pleaseLogin=() =>{alert('Please Login');};
  const toggle = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   console.log(islogin);
  // }, [islogin])

  return (
    <div className='header'>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">OLDAGE</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto my_nav" navbar>
            <NavItem>
              <NavLink href="/" style={{textDecoration:'none'}}><h4 className='nav'>Home</h4></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup" style={{textDecoration:'none'}}><h4 className='nav'>About</h4></NavLink>
            </NavItem>
             <NavItem>
                <NavLink href="/login" style={{textDecoration:'none'}}><h4 className='nav'>Donate</h4></NavLink>
              </NavItem> 
            {/* {islogin ? <NavItem>
                <Link to="/" style={{textDecoration:'none'}}><h4 className='nav' onClick={islogin}>Logout</h4></Link>
              </NavItem> :
              <NavItem>
                <Link to="/login" style={{textDecoration:'none'}}><h4 className='nav' onClick={iss}>Login</h4></Link>
              </NavItem>
            } */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header
