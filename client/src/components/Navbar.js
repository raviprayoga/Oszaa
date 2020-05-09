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
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Katalog
                        </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                <NavLink href="/pria">Pria</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="/wanita">Wanita</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                    </UncontrolledDropdown>
                    </NavItem>
                    <NavItem>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
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
                        <NavLink href="/promo">Promo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About us</NavLink>
                    </NavItem>
                </Nav>
                <Button  color="primary" href="/login">Login</Button>{' '}
                <Button color="info" href="/keranjang">Keranjang</Button>{' '}
            </Navbar>
        </div>
        )
    }
    
}

export default AppNavbar;

