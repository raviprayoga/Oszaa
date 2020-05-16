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

class KatalogPriaPage extends React.Component{
    render(){
        return(
            <div className="katalogpage">
                <div className="judul-pria bg-katalog">
                    <div class="content">
                        <h1>KATALOG</h1>
                        <h3>PRIA</h3>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col md="2" className="sidebar"><SideNav/></Col>
                        <Col>
                        <Row className="list-katalog">
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/katalog15.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Pe Kaos
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
                            <Col md>
                                <Card>
                                    <CardImg top width="100%" src="/images/katalog4.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Jaket
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
                                    <CardImg top width="100%" src="/images/katalog13.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Kemeja
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
                                    <CardImg top width="100%" src="/images/katalog16.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">CO Kaos
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
                                    <CardImg top width="100%" src="/images/katalog17.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Kaos
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 70.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md></Col>
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

export default KatalogPriaPage;