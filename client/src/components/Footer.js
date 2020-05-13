import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class Footer extends React.Component {
    render(){
    return(
        <div className="footer">
            <Container>
                <Row>
                    <Col md>
                    <h3 className="oszaa-footer">Oszaa</h3>
                    <div className="alamat-footer">
                    <FontAwesomeIcon icon="map-marker-alt" className="icon-footer"/>
                    <p>Jl. Terusan Ryacudu Way Huwi Kecamatan Jati Agung Kabupaten Lampung Selatan Provinsi Lampung 35365</p>
                    </div>
                    <div className="alamat-footer">
                    <FontAwesomeIcon icon="phone-alt" className="icon-footer"/>
                    <p>(0721) 8030188</p>
                    </div>
                    <div className="alamat-footer">
                    <FontAwesomeIcon icon="envelope" className="icon-footer"/>
                    <p>(0721) 8030188</p>
                    </div>
                    </Col>
                    <Col md>
                    <h5 className="title">INFORMASI </h5>
                    <ul>
                    <li className="list-unstyled">
                        <a href="#!">Tentang Kami</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">FAQ</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Cara Pemesanan</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Metode Pembayaran</a>
                    </li>
                    </ul>
                    </Col>
                    <Col md>
                    <h5 className="title">PROMO</h5>
                    <ul>
                    <li className="list-unstyled">
                        <a href="#!">Promo Ramadhan</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Diskon 35% OFF</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Promo Gratis Ongkir</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Beli 2 Gratis 1</a>
                    </li>
                    </ul>
                    </Col>
                    <Col md>
                    <h5 className="title">PRODUK</h5>
                    <ul>
                    <li className="list-unstyled">
                        <a href="#!">Katalog Pria</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Katalog Wanita</a>
                    </li>
                    <li className="list-unstyled">
                        <a href="#!">Aksesoris</a>
                    </li>
                    </ul>
                    </Col>
                    <Col md>
                    <h5 className="title-brands">Follow us</h5>
                    <div >
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" className="icon-ig-footer" />
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" className="icon-twit-footer" />
                    <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" className="icon-fb-footer" />
                    </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright">
                 Copyright <FontAwesomeIcon icon="copyright" size="xs" className="icon-cp-footer"/>
                  2020 <a href="./">Oszaa</a></div>
        </div>
    )
}
}

export default Footer;