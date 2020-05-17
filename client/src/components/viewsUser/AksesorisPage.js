import React from 'react';
import SideNav from '../../components/Sidenav';
import {Container, Row, Col} from 'react-bootstrap';
import {Card, 
        CardImg,  
        CardBody,
        CardTitle, 
        Pagination, 
        PaginationItem, 
        PaginationLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class KatalogPage extends React.Component{
    render(){
        return(
            <div className="katalogpage">
                <div className="judul-aksesoris bg-katalog">
                    <div class="content">
                        <h1>AKSESORIS</h1>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col md="2" className="sidebar"><SideNav/></Col>
                        <Col>
                        <Row className="list-katalog">
                            <Col md>
                                <Card>
                                    <a href="/katalog/detail">
                                    <CardImg top width="100%" src="/images/kacamata1.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">KM Wrm
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 155.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                    </a>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/kacamata2.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">KM ks
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 135.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/kacamata3.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">KM Gbn
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 150.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="list-katalog">
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/sepatu1.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Sepatu Cv
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 335.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/tas1.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Tas h
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 195.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/tas2.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">T Bg
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 170.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="list-katalog">
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/tas3.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Tas ghr
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 135.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/tas4.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Tas hj
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 135.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/tas5.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">J Ghn
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 165.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        </Col>
                        </Row>
                        <Pagination className="pagination">
                            <PaginationItem disabled>
                                <PaginationLink first href="#" />
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">
                                1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                3
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                4
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                5
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last href="#" />
                            </PaginationItem>
                        </Pagination>
                    </Container>
            </div>
        );
    }
}

export default KatalogPage;