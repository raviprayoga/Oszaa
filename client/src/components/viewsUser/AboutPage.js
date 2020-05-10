import React from 'react';
import { MDBRow, MDBCol } from "mdbreact";


class AboutPage extends React.Component {

    render(){
        return(
            <div className="back">
                <MDBRow className="">
                <MDBCol md="">
                <img
                        className="d-block w-100"
                        src="./images/back_about.jpg"
                        alt=""
                    />
                </MDBCol>
                </MDBRow>
            </div>
            
        );
    }
}
export default AboutPage;