import './App.css';
import { ScatterChart, Scatter, AreaChart, Area, BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine } from 'recharts';
import { Row, Col, Container, Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Layout from "./Layout.jsx";
import {fetchData} from './AwsFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";

export const SensorView = () => {
  const fetchDataFormDynamoDb = async () => {
    dispatch(fetchData('cmpe280Table'));
  }


  const test = useSelector(
    state => state.reducer.data
  );
  const displayed = useSelector(state => state.reducer.displayed);
  const pages = useSelector(state => state.reducer.pages);
  const [currentPage, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataFormDynamoDb();
  }, [])

  const handlePagination = (event) => {
    dispatch({
      type: 'SET_PAGE',
      currentPage: event.target.id,
    });
    setPage(event.target.id);
  }

  return (
    <Layout>
      <Container className="pt-5" fluid="md">
        <Row>
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
                  displayed.map((r, index) => {
                    return (
                      <tr id={index} onClick={(e) => { }}>
                        <td>{r.name}</td>
                        <td>{r.value}</td>
                      </tr>);
                  })
                }
              </tbody>
            </Table>
            <Pagination>
              {
                pages.map(obj => {
                  return(<PaginationItem>
                    <PaginationLink id={obj} onClick={handlePagination}>{obj}</PaginationLink>
                  </PaginationItem>);
                })
              }
            </Pagination>
          </Col>
          <Col xs="7">
            <h3 style={{marginLeft: '370px'}}><u>Line Chart</u></h3>
            <LineChart width={800} height={350} data={test}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line name="TDS (PPM)" type="monotone" dataKey="value" stroke="#8884d8" />
              <ReferenceLine y={370} label="Threshold" stroke="red" strokeDasharray="3 3" />

            </LineChart>
            
            <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>

            <h3 style={{marginLeft: '370px'}}><u>Bar Chart</u></h3>
            <BarChart width={800} height={350} data={test}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar name="TDS (PPM)" dataKey="value" fill="#8884d8" />
              <ReferenceLine y={370} label="Threshold" stroke="red" strokeDasharray="3 3" />
            </BarChart>

            <h3 style={{marginLeft: '370px'}}><u>Area Chart</u></h3>
            <AreaChart width={800} height={350} data={test}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>

              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area name="TDS (PPM)" type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
              <ReferenceLine y={370} label="Threshold" stroke="red" strokeDasharray="3 3" />
            </AreaChart>

            <h3 style={{marginLeft: '370px'}}><u>Scatter Chart</u></h3>
            <ScatterChart width={800} height={350}
              margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" name="timestamp"  />
              <YAxis dataKey="value" name="value" unit="ppm" />
              <Tooltip />
              <Legend />
              <Scatter name="TDS (PPM)" data={test} fill="#8884d8" />
              <ReferenceLine y={370} label="Threshold" stroke="red" strokeDasharray="3 3" />
            </ScatterChart>


          </Col>

        </Row>
      </Container>
    </Layout>
  );
}