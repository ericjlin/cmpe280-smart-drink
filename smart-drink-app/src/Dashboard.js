import './App.css';
import { Row, Col, Container } from "reactstrap";
import Layout from "./Layout.jsx";
import Amplify from 'aws-amplify';
import { SensorCard } from './SensorCard';
// import {fetchData} from './AwsFunctions';
import { useEffect, useState } from 'react';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const Dashboard = () => {
    // const fetchDataFormDynamoDb = async () => {
    //   await fetchData('water_sensor_data')
    // }
    const info = {
        'fridge': 'Located on the ground floor. This is hooked up to the water and ice machine.',
        'bathroom': 'This is connected to the shower head in the bathroom on the ground floor.',
        'bedroom': 'This is connected to the water filter in the bedroom on the upper floor.'
    }

    useEffect(() => {
        // fetchDataFormDynamoDb();
    });

    return (<Layout>
        <DndProvider backend={HTML5Backend}>
            <Container className="pt-5" fluid="md">
                <Row>
                    <SensorCard title="Refridgerator" info={info.fridge}/>
                    <SensorCard title="Bathroom" info={info.bathroom} />
                    <SensorCard title="Master Bedroom" info={info.bedroom} />
                </Row>
                <Row>
                    <Col />
                    <Col />
                    <Col />
                </Row>
            </Container>
        </DndProvider>
    </Layout>);
}
