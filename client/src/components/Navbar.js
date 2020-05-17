import React, { Component } from 'react';
import {Navbar, Nav, NavLink, NavDropdown, InputGroup, FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class AppNavbar extends Component{
//         state = {
//             isOpen: false
//         }

//  toggle =() => {
//     this.setState({
//         isOpen: !this.state.isOpen
//     });
// }

    render(){
        return(
            <div className="navbar">
                <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand className="brand-nav" href="/">OSZAA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavDropdown title="Katalog" id="basic-nav-dropdown">
                        <NavDropdown.Item className="dropdown-item" href="/katalog">Semua Katalog</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/katalog/pria">Pria</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/katalog/wanita">Wanita</NavDropdown.Item>
                    </NavDropdown>
                    {/* <NavDropdown title="Aksesoris" id="basic-nav-dropdown">
                        <NavDropdown.Item className="dropdown-item" href="/aksesoris">Semua Aksesoris</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/aksesoris/sepatu">Sepatu</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/aksesoris/tas">Tas</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/aksesoris/topi">Topi</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/aksesoris/scraves">Scarves</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/aksesoris/kacamata">Kaca Mata</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/aksesoris/jam">Jam Tangan</NavDropdown.Item>
                    </NavDropdown> */}
                    <NavLink href="/aksesoris">Aksesoris</NavLink>
                    <NavLink href="/promo">Promo</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    </Nav>
                    <InputGroup className="search-nav">
                        <FormControl placeholder="Search"/>
                        <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">
                            <a className="icon-nav" href="/"><FontAwesomeIcon icon="search" size="lg" title="search"/></a>
                        </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <a className="icon-nav login-nav" href="/ulogin"><FontAwesomeIcon icon="user" size="lg" title="Login"/></a>
                    <a className="icon-nav cart-nav" href="/login"><FontAwesomeIcon icon="shopping-cart" size="lg" title="Cart"/></a>
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
    
}

export default AppNavbar;