import React from 'react';
import {Carousel, 
        Container, 
        Row, 
        Col, 
        Card, 
        CardGroup, 
        Button
} from 'react-bootstrap';

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
                <h1 className="judul-kategori-home"><a href="/katalog">Produk</a></h1>
                <Row className="produk-home">
                    <Col >
                    <Card className="kategori-card">
                    <a href="/katalog/detail/1">
                    <Card.Img variant="top" src="./images/katalog12.jpg" />
                    <Card.Body className="kategori-card-body">
                        <Card.Title><h1><a href="/katalog/detail">Blu Swe</a></h1></Card.Title>
                    </Card.Body>
                    </a>
                    </Card>
                    </Col>
                    <Col >
                    <Card className="kategori-card">
                    <a href="/katalog/detail/2">
                    <Card.Img variant="top" src="./images/katalog15.jpg" />
                    <Card.Body className="kategori-card-body">
                        <Card.Title><h1><a href="/katalog">Pe Kaos</a></h1></Card.Title>
                    </Card.Body>
                    </a>
                    </Card>
                    </Col>
                    <Col >
                    <Card className="kategori-card">
                    <a href="/katalog/detail/3">
                    <Card.Img variant="top" src="./images/katalog3.jpg" />
                    <Card.Body className="kategori-card-body">
                        <Card.Title><h1><a href="/katalog/wanita">Kaos</a></h1></Card.Title>
                    </Card.Body>
                    </a>
                    </Card>
                    </Col>
                    <Col >
                    <Card className="kategori-card">
                    <a href="/katalog/detail/4">
                    <Card.Img variant="top" src="./images/katalog4.jpg" />
                    <Card.Body className="kategori-card-body">
                        <Card.Title><h1><a href="/katalog/pria">Jaket</a></h1></Card.Title>
                    </Card.Body>
                    </a>
                    </Card>
                    </Col>
                </Row>
                </Container>
                <a href="/katalog" className="btn-swall">Lihat Semua Produk</a>
                <h1 className="judul-kategori-home judul-aksesoris-home"><a href="/aksesoris">Aksesoris</a></h1>
                <Row>
                    <Col >
                    <CardGroup>
                    <Card className="kategori-card1">
                    <a href="/katalog/detail">
                    <Card.Img variant="left" src="./images/sepatu1.jpg" />
                    </a>
                    </Card>
                    <Card className="kategori-card1">
                    <a href="/katalog/detail">
                    <Card.Body className="kategori-card-body1 sepatu-home">
                        <Card.Title><h1 className="aksesoris-home">Sepatu</h1></Card.Title>
                    </Card.Body>
                    </a>
                    </Card>
                    <Card className="kategori-card1">
                    <a href="/katalog/detail">
                    <Card.Img variant="left" src="./images/kacamata1.jpg" />
                    </a>
                    </Card>
                    <Card className="kategori-card1">
                    <a href="/katalog/detail">
                    <Card.Body className="kategori-card-body1 km-home">
                        <Card.Title><h1 className="aksesoris-home">Kaca Mata</h1></Card.Title>
                    </Card.Body>
                    </a>
                    </Card>
                    </CardGroup>
                    </Col>                 
                </Row>
                <Row>
                    <Col >
                    <CardGroup>
                    <Card className="kategori-card2">
                    <a href="/katalog/detail">
                    <Card.Body className="kategori-card-body2 tas-home">
                        <Card.Title><h1 className="aksesoris-home">Tas Wanita</h1></Card.Title>
                    </Card.Body>
                    </a>
                    </Card>
                    <Card className="kategori-card2">
                    <a href="/katalog/detail">
                    <Card.Img variant="left" src="./images/tas1.jpg" />
                    </a>
                    </Card>
                    <Card className="kategori-card2">
                    <a href="/katalog/detail">
                    <Card.Body className="kategori-card-body2 topi-home">
                        <Card.Title><h1 className="aksesoris-home">Topi</h1></Card.Title>
                    </Card.Body>
                    </a>
                    </Card>
                    <Card className="kategori-card2">
                    <a href="/katalog/detail">
                    <Card.Img variant="left" src="./images/topi1.jpg" />
                    </a>
                    </Card>
                    </CardGroup>
                    </Col>   
                </Row>
                <div className="btn-ak-home">
                <a href="/aksesoris" className="btn-swall">Lihat Semua Aksesoris</a>
                </div>
                </div>
                </div>
            </div>
        );
    }
}
export default HomePage;