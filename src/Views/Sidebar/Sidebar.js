
import { NavItem,NavLink,Nav,NavbarBrand} from "reactstrap";
import './Sidebar.css'
import Logo from '../../Images/Logo66-01.png'
import { Row, Col } from "reactstrap";
const Sidebar = ()=>{
    
    return(
      <Nav vertical className='navbar p-3'  expand="md">
        <div className="row-content mt-1">
          <Row>
            <Col>
              <NavbarBrand href="/" className="mb-3">
                <img src={Logo} height='100' width='100'/>
              </NavbarBrand>
              <small className="mt-3">Welcome, User</small>
            </Col>
            
          </Row>
          </div>
  
        <NavItem>
          <NavLink className='nav-link btn' to='/'>
            <i className="fa fa-regular fa-chart-tree-map"/>Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='nav-link btn' to='/'>
            Bugs
          </NavLink>
        </NavItem>
      </Nav>
    )

}

export default Sidebar