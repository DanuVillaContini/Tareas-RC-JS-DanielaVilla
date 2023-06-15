import { Card, Col, Container, Row } from 'react-bootstrap'

export default function EmpleadoAvatar(prop) {
    return (

        <div>
            <Container>
                <Row>
                    <Col md={10} lg={10}>
                        <Card.Img
                            variant="top"
                            src={prop.imagen}
                            width="100"
                            height="120"
                        />
                    </Col>
                </Row>
            </Container>


            {/* className="d-inline-block align-top"  */}
        </div>
    )
}
