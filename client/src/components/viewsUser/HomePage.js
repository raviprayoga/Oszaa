import React from 'react';
import {Carousel, Container, Row, Col, Card, CardGroup, button} from 'react-bootstrap';

class HomePage extends React.Component {

    render(){
        return(
            <div className="homepage">
                <div className="slider">
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/pria2.png"
                        alt="Photo by Mnz on Unsplash"
                    />
                    <Carousel.Caption>
                        <h1>Clo black</h1>
                        <h4>Promo Terbatas, Paket Lengkap Baju Pria</h4>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./images/wanita1.png"
                        alt="Photo by Lauren Fleischmann on Unsplash"
                    />
                    <Carousel.Caption>
                        <h1>Os Female</h1>
                        <h3>Promo 35% OFF</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 center"
                        src="./images/unisex1.jpg"
                        alt="Photo by Lauren Fleischmann on Unsplash"
                    />
                    <Carousel.Caption>
                        <h1>Hoodie AKAIRA</h1>
                        <h4>Limited Edition</h4>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div>
                <div className="kategori-home">
                <Container>
                <h1 className="judul-kategori-home">Produk</h1>
                <Row>
                    <Col >
                    <Card className="kategori-card">
                    <Card.Img variant="top" src="./images/katalog1.jpg" />
                    <Card.Body className="kategori-card-body">
                        <Card.Title><h1>Dress</h1></Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col >
                    <Card className="kategori-card">
                    <Card.Img variant="top" src="./images/katalog2.jpg" />
                    <Card.Body className="kategori-card-body">
                        <Card.Title><h1>Jeans</h1></Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col >
                    <Card className="kategori-card">
                    <Card.Img variant="top" src="./images/katalog3.jpg" />
                    <Card.Body className="kategori-card-body">
                        <Card.Title><h1>Kaos</h1></Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col >
                    <Card className="kategori-card">
                    <Card.Img variant="top" src="./images/katalog4.jpg" />
                    <Card.Body className="kategori-card-body">
                        <Card.Title><h1>Jaket</h1></Card.Title>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <button className="btn-swall">Lihat Semua Produk</button>
                </Container>
                <h1 className="judul-kategori-home">Aksesoris</h1>
                <Row>
                    <Col >
                    <CardGroup>
                    <Card className="kategori-card1">
                    <Card.Img variant="left" src="./images/sepatu1.jpg" />
                    </Card>
                    <Card className="kategori-card1">
                    <Card.Body className="kategori-card-body1 sepatu-home">
                        <Card.Title><h1 className="aksesoris-home">Sepatu</h1></Card.Title>
                    </Card.Body>
                    </Card>
                    <Card className="kategori-card1">
                    <Card.Img variant="left" src="./images/kacamata1.jpg" />
                    </Card>
                    <Card className="kategori-card1">
                    <Card.Body className="kategori-card-body1 km-home">
                        <Card.Title><h1 className="aksesoris-home">Kaca Mata</h1></Card.Title>
                    </Card.Body>
                    </Card>
                    </CardGroup>
                    </Col>                 
                </Row>
                <Row>
                    <Col >
                    <CardGroup>
                    <Card className="kategori-card2">
                    <Card.Body className="kategori-card-body2 tas-home">
                        <Card.Title><h1 className="aksesoris-home">Tas Wanita</h1></Card.Title>
                    </Card.Body>
                    </Card>
                    <Card className="kategori-card2">
                    <Card.Img variant="left" src="./images/tas1.jpg" />
                    </Card>
                    <Card className="kategori-card2">
                    <Card.Body className="kategori-card-body2 topi-home">
                        <Card.Title><h1 className="aksesoris-home">Topi</h1></Card.Title>
                    </Card.Body>
                    </Card>
                    <Card className="kategori-card2">
                    <Card.Img variant="left" src="./images/topi1.jpg" />
                    </Card>
                    </CardGroup>
                    </Col>   
                </Row>
                <button className="btn-swall btn-ak-home">Lihat Semua Aksesoris</button>
                </div>
                </div>
            </div>
        );
    }
}
export default HomePage;