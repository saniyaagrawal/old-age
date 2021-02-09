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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [islogin, setIslogin] = useState(true);

  const iss = () => {
    setIslogin(true);
  };
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='header'>
      <Navbar color="dark" dark expand="md">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfCo4WXZ6LIrDGkMerDUdVK9L0oo4S1O2xw&usqp=CAU' style={{height: '60px', width: '60px', marginRight: '20px', borderRadius : '100%'}} alt="icon" />
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
            {islogin ? <NavItem>
                <NavLink href="/" style={{textDecoration:'none'}}><h4 className='nav'>Logout</h4></NavLink>
              </NavItem> :
              <NavItem>
                <NavLink href="/login" style={{textDecoration:'none'}}><h4 className='nav'>Login</h4></NavLink>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header
