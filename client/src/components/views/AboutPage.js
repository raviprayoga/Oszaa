import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {Col} from "react-bootstrap";
import img from './img/back_about.jpg';

import logo from './back_about.jpg';

class AboutPage extends React.Component {

    render(){
        return(
            <div className="back">
                <MDBRow className="">
                <MDBCol md="">
                    <img src="https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_1280.jpg"   />
                    <div className="ling">
                    <img src={require('./back_about.jpg')} />
                    </div>
                </MDBCol>
                </MDBRow>
            </div>
            
        );
    }
}
export default AboutPage;