import React from 'react';
import {Container, CardColumns, Card, CardImg} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
                        <Card>
                            <CardImg src="/images/promo1.jpg" />
                        </Card>
                        <Card>
                            <CardImg src="/images/promo4.jpg" />
                        </Card>
                        <Card>
                            <CardImg src="/images/promo2.jpg" />
                        </Card>
                        <Card>
                            <CardImg src="/images/promo3.jpg" />
                        </Card>
                    </CardColumns>
                </Container>
            </div>
        );
    }
}

export default PromoPage;