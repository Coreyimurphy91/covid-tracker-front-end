import React from 'react';
import { BiVial } from "react-icons/bi";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './FooterElements'
import './footer.css'

const Footer = () => {
    return (
      <>
        <Nav>
          <Bars />
          <NavMenu>
            <a className="footLink" href='https://www.vaccines.gov/'>
              Find a vaccine center near you
            </a>
            <NavLink to='/services'>
              Services
            </NavLink>
            <NavLink to='/contact-us'>
              Contact Us
            </NavLink>
            <NavLink to='/sign-up'>
              Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };

export default Footer;