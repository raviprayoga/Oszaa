import React from 'react';
import {Container, CardColumns, Card, CardImg} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ModalImage from "react-modal-image";

class PromoPage extends React.Component{
    render(){
        return(
            <div className="promopage">
                <div className="judul-promo bg-katalog">
                    <div class="content">
                        <h1>PROMO</h1>
                    </div>
                </div>
                <Container>
                    <CardColumns>
                        <ModalImage
                        small={"/images/promo1.jpg"}
                        large={"/images/promo1.jpg"}
                        className="mdl-img"
                        /> 
                        <ModalImage
                        small={"/images/promo4.jpg"}
                        large={"/images/promo4.jpg"}
                        className="mdl-img"
                        /> 
                        <ModalImage
                        small={"/images/promo3.jpg"}
                        large={"/images/promo3.jpg"}
                        className="mdl-img"
                        /> 
                        <ModalImage
                        small={"/images/promo5.jpg"}
                        large={"/images/promo5.jpg"}
                        className="mdl-img"
                        /> 
                        <ModalImage
                        small={"/images/promo2.jpg"}
                        large={"/images/promo2.jpg"}
                        className="mdl-img"
                        /> 
                    </CardColumns>
                </Container>
            </div>
        );
    }
}

export default PromoPage;