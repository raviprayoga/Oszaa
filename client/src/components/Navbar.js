import React, { Component } from 'react';
import{
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import{
    Form,
    FormControl} from 'react-bootstrap';
import{MDBBtn, MDBIcon} from 'mdbreact';



class AppNavbar extends Component{
        state = {
            isOpen: false
        }

 toggle =() => {
    this.setState({
        isOpen: !this.state.isOpen
    });
}

    render(){
        return(
            <div>
           <Navbar color="light" light expand="md" className="navbar">
                <NavbarBrand href="/">Home</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret >
                        Katalog
                        </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                <NavLink href="#">Pria</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#">Wanita</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </NavItem>
                    <NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret >
                            Aksesoris
                        </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                <NavLink href="#">Sepatu</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#">Tas</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#">Topi</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#">Scarves</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#">Kaca Mata</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#">Jam Tangan</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/promo" >Promo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about" >About us</NavLink>
                    </NavItem>
                </Nav>
                <Form inline className="cari">
                    <FormControl type="text" placeholder="Search" style={{width:'15vw'}} />
                    <MDBBtn >
                        <MDBIcon icon="search" size="sm-lg"  />    
                    </MDBBtn>
                </Form>
                <MDBBtn className="btn " type="submit" href="/login">
                    <MDBIcon icon="sign-in-alt" size="lg"  /> Login
                </MDBBtn>
                <MDBBtn className="btn " type="submit">
                    <MDBIcon icon="shopping-cart" size="lg" />
                </MDBBtn>
            </Navbar>
        </div>
        )
    }
    
}


export default AppNavbar;

