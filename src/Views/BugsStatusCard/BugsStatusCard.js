
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { Card, Row, Col } from 'reactstrap';
import './BugsStatusCard.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BugsStatusCard() {
    const data = {
        labels: [""],
        datasets: [
          {
            label: "Open",
            data: [1],
            backgroundColor: "blue"
          },
          {
            label: "Blocked",
            data: [1],
            backgroundColor: "blue"
          },
          {
            label: "Closed",
            data: [1],
            backgroundColor: "blue"
          }
        ]
      };
    
      const options = {
        responsive: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: false,
                borderDash: [3, 3],
                zeroLineColor: "blue"
              },
              categoryPercentage: 0.7,
              barPercentage: 0.9,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              display: false,
              gridLines: {
                display: false,
                zeroLineColor: "transparent"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      };
      return (
        
        <Card className="bugs-status-card">
          <div className='bugs-status'>
            <Bar data={data} width='250' height='250'/>
          </div>
        <Row>
        <Col className="doughnut-row">
            <h5>Tickets by Priority</h5>
        </Col>
        </Row>
    </Card>
      );
}