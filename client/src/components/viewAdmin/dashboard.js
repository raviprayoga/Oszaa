import React from 'react';
import {Container, Row, Table, Button} from 'react-bootstrap';
import {MDBIcon} from 'mdbreact';


class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "dashboard",
            subTitle: "Ini halaman dashboard admin!"
        }
    }


    //modal
    

    render(){
        return(
            <Container fluid>
                <Row>
                <Button variant="primary" style={{borderRadius:'20px'}}>Tambah Produk</Button>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                        <th>Kategori Produk</th>
                        <th>Nama Produk</th>
                        <th>ID Produk</th>
                        <th>Harga</th>
                        <th>img</th>
                        <th style={{textAlign:'center'}}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Baju</td>
                        <td>Baju tidur wanita</td>
                        <td>1191</td>
                        <td>200000</td>
                        <td>baju.jpg</td>
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
export default Dashboard;