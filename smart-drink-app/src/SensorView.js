import logo from './logo.svg';
import './App.css';
// import { Line } from 'react-chartjs-2';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Row, Col, Container, Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Layout from "./Layout.jsx";
const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  
  const trows = [["11/04/2021-07:30", "40"],
  ["11/04/2021-07:31", "45"],
  ["11/04/2021-07:32", "46"],
  ["11/04/2021-07:33", "43"],
  ["11/04/2021-07:34", "40"], ["11/04/2021-07:34", "40"], ["11/04/2021-07:34", "40"]]

export const SensorView = () => {
    return (
        <Row>
        <Col xs="7">
          <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
          <button onClick={() => {}}> Fetch </button>
        </Col>
        <Col xs="5" >
        <Table
            bordered
            responsive
          >
            <thead>
              <tr>
                <th>
                  DateTime
                </th>
                <th>
                  Parts per million (ppm)
                </th>
              </tr>
            </thead>
            <tbody>
            {
              trows.map((r) => {
                  return(
                  <tr onClick={(e) => {}}>
                      <td>{r[0]}</td>
                      <td>{r[1]}</td>
                  </tr>);
              })
            }
            </tbody>
          </Table>
        </Col>
      </Row>
    );
}