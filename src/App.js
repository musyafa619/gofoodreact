import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Counter from './components/counter'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

state={
  makanan:[
    {
    nama:"Belut Goreng Crispy",
    gambar:"http://www.dapurkobe.co.id/wp-content/uploads/belut-goreng-crispy.jpg"
    },
    {
      nama:"Mie Goreng",
      gambar:"http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg"
      },
      {
        nama:"Mie Goreng Korea",
        gambar:"http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-korea.jpg"
        },
        {
          nama:"Ifu Mie",
          gambar:"http://www.dapurkobe.co.id/wp-content/uploads/ifu-mie-ala-kobe.jpg"
          },
          {
            nama:"Seblak Creamy",
            gambar:"http://www.dapurkobe.co.id/wp-content/uploads/seblak-creamy-mie-bakso.jpg"
            },
            {
              nama:"Opor Ayam Lebaran",
              gambar:"http://www.dapurkobe.co.id/wp-content/uploads/opor-ayam-lebaran.jpg"
              }
  ]
};

  render() {
    return (
      <div align="center">
        
        <Header NamaHeader="Header"/>
        <br></br>
        <Row>
        {this.state.makanan.map(item=>(
          
          <Col xs="12" md="6" lg="4"> <Counter  menu={item.nama} gambar={item.gambar} ukuran={{ width: "85%" }}/></Col>
        ))}
        </Row>
        
        {/* <Row>
        <Col xs="6"><Counter menu="Mie Rebus" gambar="http://cdn2.tstatic.net/manado/foto/bank/images/mi-instan_20180508_073137.jpg" ukuran={{ width: "100%" }}/></Col>
        <Col xs="6"><Counter menu="Mie Goreng" gambar="http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg" ukuran={{ width: "85%" }}/></Col>
       </Row> */}

      </div> 
    );
  }
}

export default App;
