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
import Icon from '../static/images/old-man.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [islogin, setIslogin] = useState(false);

 const handleSubmit = (e) => {
   e.preventDefault();
  window.localStorage.removeItem("token");
  alert('Successfully logged out !!')
  setIslogin(false);
 }

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    var token = JSON.parse(window.localStorage.getItem('token'));
    if(token) setIslogin(true);
  }, [])

  return (
    <div className='header'>
      <Navbar style={{backgroundColor: 'black'}}  expand="md">
        <img src={Icon} style={{height: '40px', width: '40px', marginRight: '20px', borderRadius : '100%'}} alt="icon" />
        <NavbarBrand href="/">AGE WELL</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto my_nav" navbar>
            <NavItem>
              <NavLink href="/" style={{textDecoration:'none'}}><h4 className='nav'>Home</h4></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add" style={{textDecoration:'none'}}><h4 className='nav'>Add new home</h4></NavLink>
            </NavItem>
             <NavItem>
                <NavLink href="/searchresult" style={{textDecoration:'none'}}><h4 className='nav'>Search On Map</h4></NavLink>
              </NavItem> 
            {islogin ? <NavItem>
                <NavLink onClick={handleSubmit} href="/" style={{textDecoration:'none'}}><h4 className='nav'>Logout</h4></NavLink>
              </NavItem> :
              <NavItem>
                <NavLink href="/login" style={{textDecoration:'none'}}><h4 className='nav'>Login / Signup</h4></NavLink>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header
