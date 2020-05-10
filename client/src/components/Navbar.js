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
           <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/katalog" >Katalog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/promo" >Promo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about" >About us</NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret >
                            Options
                        </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>

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

