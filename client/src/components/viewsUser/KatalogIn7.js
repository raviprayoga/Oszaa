import React from 'react';
import {Container, Row, Col,  Accordion, Card} from 'react-bootstrap';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

class KatalogIn extends React.Component{
    render(){
        return(
            <Container className="detail-katalog">
                <Row>
                    <Col sm="4">
                    <img className="w-100" src="/images/katalog14.jpg" />
                    <div className="rincian">
                        <Accordion>
                        <Card className="title">
                            <Card.Title>
                                <Accordion.Toggle className="rincian-custom" variant="link" eventKey="1">
                                <p className="small">Rincian Ukuran</p>
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
                        <h1>Pe Kaos</h1>
                        <div className="icon-star">
                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                        <FontAwesomeIcon icon="star" size="sm"/>
                        <FontAwesomeIcon icon="star" size="sm"/>
                        </div>
                        <h5>Pe Kaos adalah kaos yang menggunakan benang a sehingga tidak mudah rusak</h5>
                        <h3 className="harga">Rp. 135.000</h3>
                        <p style={{textAlign:"left"}}>Stok Tersedia: 15</p>
                        <div className="warna">
                            <p>Warna Tersedia: </p>
                            <div className="warna-item blue"> </div>
                            <div className="warna-item white"> </div>
                            <div className="warna-item black"> </div>
                            <div className="warna-item grey"> </div>
                        </div>
                        <div className="ukuran">
                            <p>Ukuran Tersedia:</p>
                            <Button className="ukuran-item">XXL</Button>
                            <Button className="ukuran-item">XL</Button>
                            <Button className="ukuran-item">L</Button>
                            <Button className="ukuran-item">M</Button>
                            <Button className="ukuran-item">S</Button>
                            <Button className="ukuran-item">XS</Button>
                        </div>
                        <div className="add-cart">
                            <Link to ="/login">
                            <Button>Beli Sekarang</Button>
                            </Link>
                            <Link to = "/login">
                            <Button>Masukkan Keranjang</Button>
                            </Link>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default KatalogIn;