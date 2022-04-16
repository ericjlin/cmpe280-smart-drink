import { useEffect } from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

export const SensorCard = (props) => {
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
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <Button onClick={props.toggle}>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </Col>
    );
}