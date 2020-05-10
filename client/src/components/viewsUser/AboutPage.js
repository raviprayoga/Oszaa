import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {MDBIcon} from 'mdbreact';

const style = {
    width: '50%',
    height: '50%'
  };

class AboutPage extends React.Component {

    

    render(){
        return(
            

            <div>
                <div> <img src="./images/back_about.jpg" className="gbr" alt="" />
                    <div className="loogo-oszaa" alt="">
                        <img src="./images/Oszaa.png" />
                    </div>
                </div>

                <div className="header-about">
                    <p>Tentang Oszaa</p>
                </div>
                <div className="deskripsi">
                    <p style={{textAlign:'center'}}>Oszaa merupakan e-commerce yang menjual berbagai jenis pakaian pria dan wanita. Oszaa berdiri sejak 2020, 
                    Limited Edition adalah produk unggulan kami, dengan hanya mengeluarkan jenis produk terbatas yang berbeda dengan e-commerce lain. Namun walaupun 
                    produk yang dijual dengan stok terbatas, kami tetap memiliki banyak pilihan untuk anda, sehingga memungkinkan anda mendapatkan produk yang anda 
                    cari sesuai keinginan. Tidak hanya produk pakaian, Oszaa juga menjual aksesoris sebagai pelengkap penampilan anda
                    </p>
                </div>
                <div>
                    <Map className="maps"
                        google={this.props.google}
                        style={style}
                        initialCenter={{
                            lat: -5.358125,
                            lng: 105.314860
                        }}
                        zoom={15}
                        onClick={this.onMapClicked}
                    >
    
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                        <div className="icon">
                        <p className="akun"><MDBIcon fab icon="instagram" size="2x" /> @Oszaa_store</p>
                            
                        <p className="akun"><MDBIcon fab icon="facebook-square" size="2x" /> Oszaa_Official</p>
                            
                        <p className="akun"><MDBIcon fab icon="twitter-square" size="2x" /> Oszaa2020</p>
                            
                        <p className="akun"><MDBIcon fab icon="whatsapp-square" size="2x"  /> (+62)8-1355-9999</p>
                            
                        <p className="akun"><MDBIcon icon="at" size="2x" /> oszaa@gmail.com</p>
                        </div>
                    </Map>
                    
                </div>
            </div>
        );
    }
}
export default  GoogleApiWrapper({
    apiKey:'AIzaSyAOUZrYG4SPmdhV6vut8q6ULNKNK0EhWOw'
}) (AboutPage);