import React from 'react';
import { Row, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class LoginAdmin extends React.Component {

    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            errors:{}

        };
    }

    onChange = e =>{
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password:this.state.password
        };
        console.log(userData);
    };

    render(){
        const {errors}=this.state;
        return(
            <div className="dasar">
              <Container fluid>
                <Row>
                <div className="box-form">
                    <div noValidate onSubmit={this.onSubmit} className="form">
                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input 
                             onChange={this.onChange}
                             value={this.state.email}
                             error={errors.email}
                             id="email" 
                             type="email"
                             className="form-control" 
                             placeholder="Enter email" 
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input 
                             onChange={this.onChange}
                             value={this.state.password}
                             error={errors.password}
                             id="password" 
                             type="password"
                             className="form-control" 
                             placeholder="Enter password" 
                            />
                        </div>


                        <button type="submit" className="btn btn-primary center-block"  >Login</button>
                        
                        <p className="forgot-password text-center">
                                {/* <a href="/lupa-pass" style={{fontWeight:'bold'}}>Forget password?</a>  */}
                                <a href="/regis" style={{fontWeight:'bold'}}>Create acount</a>
                        </p>
                        <br></br>
                    </div>
                </div>
                </Row>
            </Container>
            </div>
        );
    }
}
export default LoginAdmin;