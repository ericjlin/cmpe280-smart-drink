import './App.css';
import { Row, Col, Container } from "reactstrap";
import Layout from "./Layout.jsx";
import { SensorCard } from './SensorCard';
import { useEffect, useState } from 'react';
import { DndProvider, useDrop, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const Dashboard = () => {
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
                <h3>Welcome User!</h3>
                <br />
                <Row>
                    <SensorCard title="Refridgerator 1" info={info.fridge}/>
                    <SensorCard title="Refridgerator 2" info={info.bathroom} />
                    <SensorCard title="Refridgerator 3" info={info.bedroom} />
                    <SensorCard title="Refridgerator 4" info={info.bedroom} />
                </Row>
                <br />
                <Row>
                    <SensorCard title="Refridgerator 5" info={info.bathroom}/>
                    <SensorCard title="Refridgerator 6" info={info.bathroom} />
                    <SensorCard title="Refridgerator 7" info={info.bedroom} />
                    <SensorCard title="Refridgerator 8" info={info.bedroom} />
                </Row>
            </Container>
        </DndProvider>
    </Layout>);
}
