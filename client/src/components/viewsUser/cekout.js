import React from 'react';
import {Container, Row, Col,  Accordion, Card, Form} from 'react-bootstrap';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';


class Cekout extends React.Component{
    render(){
        return(
            <Container className="detail-katalog">
                <Row>
                    <Col sm="4">
                    <img className="w-100" src="/images/katalog12.jpg" />
                    <div className="rincian">
                        <Accordion>
                        <Card className="title">
                            <Card.Title>
                                <Accordion.Toggle className="rincian-custom" variant="link" eventKey="1">
                                <p className="small">$6.33</p>
                                </Accordion.Toggle>
                            </Card.Title>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="rincian-detail">
                                    <p>XS: Panjang Baju= 66 cm, Panjang Lengan = 57 cm,
                                     Lebar Bahu = 43 cm, Lebar Dada = 54 cm</p>
                                    <p>S: Panjang Baju= 68 cm, Panjang Lengan = 59 cm,
                                     Lebar Bahu = 45 cm, Lebar Dada = 56 cm</p>
                                    <p>M: Panjang Baju= 70 cm, Panjang Lengan = 60 cm,
                                     Lebar Bahu = 46 cm, Lebar Dada = 58 cm</p>
                                     <p>L: Panjang Baju= 73 cm, Panjang Lengan = 61 cm,
                                     Lebar Bahu = 48 cm, Lebar Dada = 60 cm</p>
                                    <p>XL: Panjang Baju= 75 cm, Panjang Lengan = 61,5 cm,
                                     Lebar Bahu = 50 cm, Lebar Dada = 63 cm</p>
                                     <p>XXL: Panjang Baju= 76 cm, Panjang Lengan = 62 cm,
                                     Lebar Bahu = 52 cm, Lebar Dada = 66 cm</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    </Col>
                    <Col>
                    <div className="desc-katalog">
                    <Form className="cek">
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Address
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="Address" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Card number
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="card number" />
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2} style={{marginRight:"1vw"}}>
                                Metode pembayaran
                            </Form.Label>
                            <Col sm={10}>
                                <br></br>
                                <Form.Check
                                type="radio"
                                label="Cash on delivery"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                label="Transfer"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                
                            </Col>
                            </Form.Group>
                        </fieldset>
                        

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">cek out</Button>
                            </Col>
                        </Form.Group>
                        </Form>
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Cekout;