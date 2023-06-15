import { Container, Row, Image, Col} from 'react-bootstrap'
import Logo from '../assets/logoRolling.png'

export default function Footer() {
    return (
        <>
            <footer className="mt-2 p-2">
                <Container className="text-center d-flex justify-content-center" fluid="md">
                    <Row className="my-2 text-white d-flex  flex-column align-items-center">
                        <Col xs={6} md={6} >
                            <Image src={Logo} variant="top"          width="120"
                            height="130"/>
                        </Col>
                        <Col xs={6} md={10} className='mx-4'>
                            <span className='mx-3'>Proyecto realizado por Daniela</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
