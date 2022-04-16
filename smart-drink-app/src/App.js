import logo from './logo.svg';
import './App.css';
// import { Line } from 'react-chartjs-2';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Row, Col, Container, Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Layout from "./Layout.jsx";
import Amplify from 'aws-amplify';
import { SensorView } from './SensorView';
import { SensorCard } from './SensorCard';

// import {fetchData} from './AwsFunctions';
import { useEffect, useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
// import awsconfig from './aws-exports';
// const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       fill: false,
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132, 0.2)',
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true
//     }
//   }
// };



// const LineChart = () => (
//   <>
//     <div className='header'>
//       <h1 className='title'>Sensor Data</h1>
//       <div className='links'>
//         <a
//           className='btn btn-gh'
//           href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
//         >
//           Github Source
//         </a>
//       </div>
//     </div>
//     <Line data={data} options={options} />
//   </>
// );

function App() {
  // const fetchDataFormDynamoDb = async () => {
  //   await fetchData('water_sensor_data')
  // }

  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    // fetchDataFormDynamoDb();
  });


  return (
    <Layout>
      <Container className="pt-5" fluid="md">
        {
          isClicked ? <SensorView /> :
            <Row>
              <SensorCard title="Refridgerator" toggle={() => {
                setIsClicked(!isClicked);
              }}/>
              <SensorCard title="Bathroom" toggle={() => {
                setIsClicked(!isClicked);
              }}/>
              <SensorCard title="Master Bedroom" toggle={() => {
                setIsClicked(!isClicked);
              }}/>
            </Row>

        }
      </Container>
    </Layout>
  );
}

export default App;
