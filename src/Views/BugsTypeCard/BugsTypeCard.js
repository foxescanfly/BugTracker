import { Card, Row, Col } from "reactstrap"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './BugsTypeCard.css'
import { useSelector } from 'react-redux';
import { selectAllBugs } from '../../Controllers/Redux/bugsSlice';



const BugsTypeCard =()=>{

  ChartJS.register(ArcElement, Tooltip, Legend);

  const bugs = useSelector(selectAllBugs)
  const lowPri = bugs.filter((bug)=>bug.priority === 'low').length
  const midPri = bugs.filter((bug)=>bug.priority === 'mid').length
  const highPri = bugs.filter((bug)=>bug.priority === 'high').length
  const urgPri = bugs.filter((bug)=>bug.priority === 'urgen').length

const data = {
  labels: [
    'Low',
    'Medium',
    'High',
    "Urgent"
  ],
  datasets: [
    {
      labels: ["a", "b", "c", "d"],
      data: [lowPri, midPri, highPri, urgPri],
      backgroundColor: [
        'rgb(0, 38, 255)',
        'rgb(0, 141, 7)',
        'rgb(255, 145, 0)',
        'rgb(255, 34, 0)' 
      ],
      borderColor: [
        'white'
      ],
      borderWidth: 2,
    },
  ],
};
  return (
        <Card className="bugs-doughnut-card">
            <div className="bugs-doughnut">
                <Doughnut data={data} />
            </div>
            <Row>
            <Col className="doughnut-row">
                <h5>Tickets by Priority</h5>
            </Col>
            </Row>
        </Card>
  );
}

export default BugsTypeCard