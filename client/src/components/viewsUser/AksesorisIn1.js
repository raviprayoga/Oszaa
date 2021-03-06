import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{Link} from 'react-router-dom';

class KatalogIn extends React.Component{
    render(){
        return(
            <Container className="detail-katalog">
                <Row>
                    <Col sm="4">
                    <img className="w-100" src="/images/kacamata1.jpg" />
                    <div className="rincian">
                    </div>
                    </Col>
                    <Col>
                    <div className="desc-katalog">
                        <h1>Km Wrm</h1>
                        <div className="icon-star">
                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                        </div>
                        <h5>Kacamata dengan frame elastis</h5>
                        <h3 className="harga">Rp. 155.000</h3>
                        <p style={{textAlign:"left"}}>Stok Tersedia: 17</p>
                        <div className="warna">
                            <p>Warna Tersedia: </p>
                            <div className="warna-item black"> </div>
                            <div className="warna-item purple"> </div>
                            <div className="warna-item grey"> </div>
                        </div>
                        <div className="ukuran">
                            <p>Ukuran Tersedia:</p>
                            <Button className="ukuran-item">40</Button>
                            <Button className="ukuran-item">42</Button>
                            <Button className="ukuran-item">45</Button>
                        </div>
                        <div className="add-cart">
                            <Link to = "/login">
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