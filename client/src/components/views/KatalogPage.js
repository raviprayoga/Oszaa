import React from 'react';

class KatalogPage extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "Katalog",
            subTitle: "Ini halaman katalog!"
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.subTitle}</p>
            </div>
        );
    }
}
export default KatalogPage;