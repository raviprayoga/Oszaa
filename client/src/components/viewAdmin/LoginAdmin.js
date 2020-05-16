import React from 'react';
import { Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class LoginAdmin extends React.Component {

    render(){
        return(
            <div className="dasar">
              <Container fluid>
                <Row>
                <div className="box-form">
                    <form className="form">
                        <h3>Admin Login</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button  href = "/dashboard" type="submit" className="btn btn-primary center-block" style={{borderRadius:'10px'}}>Submit</button>
                       
                    </form>
                </div>
                </Row>
            </Container>
            </div>
        );
    }
}
export default LoginAdmin;