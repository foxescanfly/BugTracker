import './BugsDisplay.css'
import { useSelector } from 'react-redux'
import { selectAllBugs } from '../../Controllers/Redux/bugsSlice'
import { Card, Col, Row } from 'reactstrap'
const BugsDisplay=()=>{
    const bugs = useSelector(selectAllBugs)
    return(
        <div className='bugs-display'>
            <Row>
                <Col xs='2' sm='8'className='card-title'>
                    <h1>Your Bugs</h1>
                </Col>
            </Row>
                {bugs.map((bug)=>{
                    return(
                <Row>
                    <Col xs='1' sm='6'>
                    {bug.name}
                    </Col>
                    <Col xs='1' sm='6'>
                    {bug.description}
                    </Col>
                </Row>)})}
            
            </div>
    )

}

export default BugsDisplay