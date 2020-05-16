import React, { Component } from 'react';
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
    Button,
    Label,
    Input,
    Pagination, 
    PaginationItem, 
    PaginationLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SideNav extends Component{
    render(){
        return(
            <div className="sidenav">
                <div>
                <h5>Sort by:</h5>
                <UncontrolledDropdown>
                    <DropdownToggle className="btn btn-sortby">Populer
                    <FontAwesomeIcon icon="caret-down" className="icon-side"/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Populer</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Terlaris</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </div>
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
                                Celana
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Nama Kategori
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <h5>Warna:</h5>
                        <div className="warna">
                            <div className="warna-item black"> </div>
                            <div className="warna-item white"> </div>
                            <div className="warna-item pink"> </div>
                            <div className="warna-item yellow"> </div>
                        </div>
                        <div className="warna">
                            <div className="warna-item blue"> </div>
                            <div className="warna-item green"> </div>
                            <div className="warna-item purple"> </div>
                            <div className="warna-item grey"> </div>
                        </div>
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
                    <FormGroup>
                        <h5>Ukuran:</h5>
                        <div className="ukuran">
                            <Button className="ukuran-item">XXL</Button>
                            <Button className="ukuran-item">XL</Button>
                            <Button className="ukuran-item">L</Button>
                            <Button className="ukuran-item">M</Button>
                        </div>
                        <div className="ukuran">
                            <Button className="ukuran-item">S</Button>
                            <Button className="ukuran-item">XS</Button>
                        </div>
                    </FormGroup>            
            </div>
        )
    }
}
export default SideNav;