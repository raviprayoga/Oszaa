import React from 'react';
import {Container, Row, Table, Button} from 'react-bootstrap';
import {MDBIcon} from 'mdbreact';


class User extends React.Component {
   


    //modal
    

    render(){
        return(
            <Container fluid>
                <Row>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                        <th>Email</th>
                        <th>Password</th>
                        <th>ID User</th>
                        <th>Alamat</th>
                        <th style={{textAlign:'center'}}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>bagus@gmail.com</td>
                        <td>12113</td>
                        <td>11231</td>
                        <td>Bandar Lampung</td>
                        <div style={{textAlign:'center'}}>
                        <Button variant="warning" style={{borderRadius:'20px'}}><MDBIcon far icon="edit" size="lg"/></Button>
                        <Button variant="danger" style={{borderRadius:'20px'}}><MDBIcon far icon="trash-alt" size="lg"/></Button>
                        </div>
                        </tr>
                        
                    </tbody>
                </Table>
                </Row>
            </Container>
        );
    }
}
export default User;