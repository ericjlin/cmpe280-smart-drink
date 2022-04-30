import { useEffect } from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row } from "reactstrap";
import { useHistory } from "react-router-dom";

export const SensorCard = (props) => {
    const history = useHistory();
    useEffect(() => {

    }, [])
    return (
        <Col>
            <Card
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {props.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        <Row>
                            <Col>Active</Col>
                            <Col><div style={{
                                borderRadius: '50%',
                                backgroundColor: '#7FFF00',
                                height: 10,
                                width: 10,
                                marginTop: 5
                            }}></div></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                    </CardSubtitle>
                    <CardText>
                        {props.info}
                    </CardText>
                    <Button onClick={() => history.push('/sensor')}>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </Col>
    );
}