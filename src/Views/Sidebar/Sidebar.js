import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  
  faAddressBook,
  faCopy,
} from "@fortawesome/free-regular-svg-icons";
import { NavItem, NavLink, Nav, NavbarBrand, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import './Sidebar.css'
import Brand from'../../Images/Logo66-01.png'


const SideBar = () => (
  <Col xs='2'className="sidebar-container">
    <div className="sidebar">
      <NavbarBrand href="/" className='ms-5 sidebar-header'>
        <Col>
              <img src={Brand} width='150' height='150'alt='logo'/>
              <h2 className='sidebar-header'>BugTracker</h2>
              <p className='sidebar-subheader'>Welcome, user</p>
        </Col>
      </NavbarBrand>
      <div >
        <Nav vertical className="list-unstyled pb-3">
            <NavItem>
            <NavLink tag={Link} to={"/"}>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faChartBar} className="mr-2" />
                </Col>
                <Col>
                  <p style={{color:'gray'}} className='link d-none d-sm-block'>Dashboard</p>
                </Col>
              </Row>
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink tag={Link} to={"/bugs"}>
              <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
              My Bugs
            </NavLink>
          </NavItem>
          
        </Nav>
      </div>
    </div>
  </Col>
);


export default SideBar;