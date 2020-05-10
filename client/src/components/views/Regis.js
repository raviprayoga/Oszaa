import React from 'react';
import { Form,Col,Button,Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class Regis extends React.Component {

    render(){
        return(
            <div className="dasar">
              <Container fluid>
                <Row>
                <div className="box-form">
                <Form className="form">
                <h3>Sign Up   </h3>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Bandar Lampung" />
                    </Form.Group>


                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
                </div>
                </Row>
            </Container>
            </div>
        );
    }
}
export default Regis;