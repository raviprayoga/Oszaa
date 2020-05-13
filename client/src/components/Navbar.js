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
                        <NavDropdown.Item className="dropdown-item" href="/pria">Pria</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/wanita">Wanita</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Aksesoris" id="basic-nav-dropdown">
                        <NavDropdown.Item className="dropdown-item" href="/">Sepatu</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/">Tas</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/">Topi</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/">Scarves</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/">Kaca Mata</NavDropdown.Item>
                        <NavDropdown.Item className="dropdown-item" href="/">Jam Tangan</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink href="/promo">Promo</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    </Nav>
                    <InputGroup className="search-nav">
                        <FormControl placeholder="Search"/>
                        <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">
                            <a href="/"><FontAwesomeIcon icon="search" size="lg" className="icon-nav" title="search"/></a>
                        </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <a href="/login"><FontAwesomeIcon icon="user" size="lg" className="icon-nav login-nav" title="Login"/></a>
                    <a href="/"><FontAwesomeIcon icon="shopping-cart" size="lg" className="icon-nav cart-nav" title="Cart"/></a>
                </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
    
}

export default AppNavbar;