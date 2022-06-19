import { Col, Row } from "reactstrap"
import { BugsStatusCard } from "../BugsStatusCard/BugsStatusCard"
import BugsTypeCard from "../BugsTypeCard/BugsTypeCard"
import TotalBugsCard from "../TotalBugsCard/TotalBugsCard"


const Dashboard = ({sidebarIsOpen})=>{
   
    return(
        <div >
            <Row>
                <Col xs='10' md='5' >
                    <TotalBugsCard/>
                </Col>
                <Col className="dashboard-col" xs='10' md='5'>
                    <BugsTypeCard/>
                </Col>
            </Row>
            <Row>
                <Col xs='10' md='5'>
                    <BugsStatusCard/>
                </Col>
                
            </Row>
        </div>
    )
    


}

export default Dashboard