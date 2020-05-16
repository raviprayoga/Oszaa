import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {UncontrolledDropdown, 
        DropdownToggle, 
        DropdownMenu, 
        DropdownItem, 
        Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
        FormGroup,
        Label,
        Input,
        Pagination, 
        PaginationItem, 
        PaginationLink
} from 'reactstrap';

class PromoPage extends React.Component{
    render(){
        return(
            <div className="promopage">
                <Container>
                    <h1 className="judul-promo">PROMO OSZAA</h1>
                    <Row>
                        <Col>
                        <div>
                            <Card>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <Card>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <Card>
                                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
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

export default PromoPage;