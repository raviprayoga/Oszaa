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

class KatalogWanitaPage extends React.Component{
    render(){
        return(
            <div className="katalogpage">
                <div className="judul-wanita bg-katalog">
                    <div class="content">
                        <h1>KATALOG</h1>
                        <h3>WANITA</h3>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col md="2" className="sidebar"><SideNav/></Col>
                        <Col>
                        <Row className="list-katalog">
                            <Col md>
                                <Card>
                                    <a href="/katalog/detail/1">
                                    <CardImg top width="100%" src="/images/katalog12.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Blu Swe
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
                                    <a href="/katalog/detail/5">
                                    <CardImg top width="100%" src="/images/katalog11.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Sweter
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 165.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                    </a>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <a href="/katalog/detail/3">
                                    <CardImg top width="100%" src="/images/katalog3.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Kaos
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 95.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                    </a>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="list-katalog">
                            <Col md>
                                <Card>
                                    <a href="/katalog/detail/7">
                                    <CardImg top width="100%" src="/images/katalog14.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Pe Kaos
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
                                    </a>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <a href="/katalog/detail/9">
                                    <CardImg top width="100%" src="/images/katalog6.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">J Denim
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
                                    </a>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <a href="/katalog/detail/10">
                                    <CardImg top width="100%" src="/images/katalog18.jpg" className="img-katalog"/>
                                    <CardBody className="text-katalog">
                                        <Col sm="7" className="nama">
                                        <CardTitle className="title">Blouse
                                        <FontAwesomeIcon icon="star" size="sm" className="checked icon-star"/>
                                        <FontAwesomeIcon icon="star" size="sm" className="checked"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        <FontAwesomeIcon icon="star" size="sm"/>
                                        </CardTitle>
                                        </Col>
                                        <Col className="nama">
                                        <CardTitle className="harga">Rp. 235.000,-</CardTitle>
                                        </Col>
                                    </CardBody>
                                    </a>
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

export default KatalogWanitaPage;