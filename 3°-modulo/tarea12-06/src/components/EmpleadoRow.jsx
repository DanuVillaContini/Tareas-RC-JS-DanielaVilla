import { Badge,  Card, Col, Container, Row } from "react-bootstrap";

export default function EmpleadoRow(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} lg={12}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{props.nombre}</Card.Title>

                                <Card.Text>
                                    <h4>{props.puesto}
                                        <Badge bg="secondary">{props.area}</Badge>
                                    </h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
