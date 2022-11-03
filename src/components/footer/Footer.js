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
              Find a vaccination center near you
            </a>
            <NavLink to='/services'>
              Services
            </NavLink>
            <NavLink to='/contact-us'>
              Contact Us
            </NavLink>
            <a className="footLink" href='https://www.covid.gov/tests'>
              Find Covid tests
            </a>
          </NavMenu>
        </Nav>
      </>
    );
  };

export default Footer;