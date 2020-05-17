import React, {Component} from 'react';
import { Form,Col,Button,Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Link} from  "react-router-dom";

class Regis extends React.Component {

    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id] : e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();

    const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
    };
    console.log(newUser);

    };

    

    render(){

        const {errors} = this.state;

        return(
            <div className="dasar">
              <Container fluid>
                <Row>
                <div className="box-form">
                    <div noValidate onSubmit={this.onSubmit} className="form">
                        <h3>Regis</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input 
                             onChange={this.onChange}
                             value={this.state.name}
                             error={errors.name}
                             id="name" 
                             type="name"
                             className="form-control" 
                             placeholder="Enter name" 
                            />
                        </div>

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

                        <div className="form-group">
                            <label>Password</label>
                            <input 
                             onChange={this.onChange}
                             value={this.state.password2}
                             error={errors.password2}
                             id="password2" 
                             type="password2"
                             className="form-control" 
                             placeholder="Enter password2" 
                            />
                        </div>


                        <button type="submit" className="btn btn-primary center-block"  >Regis</button>
                        
                        <p className="forgot-password text-center">
                                {/* <a href="/lupa-pass" style={{fontWeight:'bold'}}>Forget password?</a>  */}
                                <a href="/login" style={{fontWeight:'bold'}}>Login</a>
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
export default Regis;

// import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { registerUser } from "../../actions/authActions";
// import classnames from "classnames";

// class Regis extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       password2: "",
//       errors: {}
//     };
//   }

//   componentDidMount() {
//     // If logged in and user navigates to Register page, should redirect them to dashboard
//     if (this.props.auth.isAuthenticated) {
//       this.props.history.push("/");
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.errors) {
//       this.setState({
//         errors: nextProps.errors
//       });
//     }
//   }

//   onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//   };

//   onSubmit = e => {
//     e.preventDefault();

//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2
//     };

//     this.props.registerUser(newUser, this.props.history);
//   };

//   render() {
//     const { errors } = this.state;

//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col s8 offset-s2">
//             <Link to="/" className="btn-flat waves-effect">
//               <i className="material-icons left">keyboard_backspace</i> Back to
//               home
//             </Link>
//             <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//               <h4>
//                 <b>Register</b> below
//               </h4>
//               <p className="grey-text text-darken-1">
//                 Already have an account? <Link to="/login">Log in</Link>
//               </p>
//             </div>
//             <form noValidate onSubmit={this.onSubmit}>
//               <div className="input-field col s12">
//                 <input
//                   onChange={this.onChange}
//                   value={this.state.name}
//                   error={errors.name}
//                   id="name"
//                   type="text"
//                   className={classnames("", {
//                     invalid: errors.name
//                   })}
//                 />
//                 <label htmlFor="name">Name</label>
//                 <span className="red-text">{errors.name}</span>
//               </div>
//               <div className="input-field col s12">
//                 <input
//                   onChange={this.onChange}
//                   value={this.state.email}
//                   error={errors.email}
//                   id="email"
//                   type="email"
//                   className={classnames("", {
//                     invalid: errors.email
//                   })}
//                 />
//                 <label htmlFor="email">Email</label>
//                 <span className="red-text">{errors.email}</span>
//               </div>
//               <div className="input-field col s12">
//                 <input
//                   onChange={this.onChange}
//                   value={this.state.password}
//                   error={errors.password}
//                   id="password"
//                   type="password"
//                   className={classnames("", {
//                     invalid: errors.password
//                   })}
//                 />
//                 <label htmlFor="password">Password</label>
//                 <span className="red-text">{errors.password}</span>
//               </div>
//               <div className="input-field col s12">
//                 <input
//                   onChange={this.onChange}
//                   value={this.state.password2}
//                   error={errors.password2}
//                   id="password2"
//                   type="password"
//                   className={classnames("", {
//                     invalid: errors.password2
//                   })}
//                 />
//                 <label htmlFor="password2">Confirm Password</label>
//                 <span className="red-text">{errors.password2}</span>
//               </div>
//               <div className="col s12" style={{ paddingLeft: "11.250px" }}>
//                 <button
//                   style={{
//                     width: "150px",
//                     borderRadius: "3px",
//                     letterSpacing: "1.5px",
//                     marginTop: "1rem"
//                   }}
//                   type="submit"
//                   className="btn btn-large waves-effect waves-light hoverable blue accent-3"
//                 >
//                   Sign up
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Regis.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { registerUser }
// )(withRouter(Regis));