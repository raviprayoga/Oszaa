import React, { Component } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    ButtonDropdown,
    Container
} from 'reactstrap';


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
                        <NavLink href="/katalog">Katalog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/promo">Promo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About us</NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
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
                <Button  color="primary" href="/login">Login</Button>{' '}
                <Button color="info" href="/keranjang">Keranjang</Button>{' '}
            </Navbar>
        </div>
        )
    }
    
}

export default AppNavbar;

