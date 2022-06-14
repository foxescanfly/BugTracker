import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faChartBar,
  faAddressBook,
  faRectangleList
 
  
} from "@fortawesome/free-regular-svg-icons";
import { NavItem, NavLink, Nav, NavbarBrand, Button } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import './Sidebar.css'
import Logo from '../../Images/Logo66-01.png'



const SideBar = ({ isOpen, toggle }) => (
  <>
  <Button className='toggle-button' onClick={toggle}>
        <FontAwesomeIcon icon={faChartBar} />
  </Button>

  <div className={classNames("sidebar",{ "is-open": isOpen })} sticky='top'>
    <div className="sidebar-header">
      
       <NavbarBrand  href="/" >
        <img src={Logo} width='150' height='150'/>
       </NavbarBrand>
      
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
       
        <h4>Bug Tracker</h4>
        
        <p>Welcome, User</p>
        <NavItem>
          <NavLink tag={Link} to={"/"} className='link-name'>
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            {'  '}Dashboard
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink tag={Link} to={"/bugs"} className='link-name'>
            <FontAwesomeIcon icon={faRectangleList} className="mr-2" />
            {'  '}Bugs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"} className='link-name'>
            <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"} className='link-name'>
            <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
  </>
  
  
);



export default SideBar;