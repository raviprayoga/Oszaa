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

class KatalogWanitaPage extends React.Component{
    render(){
        return(
            <div className="katalogpage">
                <Container>
                    <h1 className="judul-katalog">KATALOG WANITA</h1>
                    <Row>
                        <Col>
                            <div></div>
                            <h5>Sort by:</h5>
                            <UncontrolledDropdown>
                                <DropdownToggle caret color="primary" outline>Populer</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Populer</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Terlaris</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <FormGroup>
                                <h5>Kategori:</h5>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}  
                                        Kemeja
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Kaos
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Outter
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}  
                                        Jaket
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Sweater
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}  
                                        Dress
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Celana
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Rok
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            <FormGroup>
                                <h5>Harga:</h5>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Tampilkan semua
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        500.000 - 1.000.000
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Dibawah 500.000
                                    </Label>
                                </FormGroup>
                            </FormGroup>
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

export default KatalogWanitaPage;