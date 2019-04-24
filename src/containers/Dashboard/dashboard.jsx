import React, { Component } from 'react';
import Header from '../../components/header'
import Counter from '../../components/counter'
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from "react-router-dom";

class Dashboard extends Component {

state={
  makanan:[
    {
    id: 1,
    number: 0,
    price: 15000,
    nama:"Belut Goreng Crispy",
    gambar:"http://www.dapurkobe.co.id/wp-content/uploads/belut-goreng-crispy.jpg"
    },
    {
    id: 2,
    number: 0,
    nama:"Mie Goreng",
    price: 10000,
    gambar:"http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg"
    },
    {
    id: 3,
    number: 0,
    price: 20000,
    nama:"Mie Goreng Korea",
    gambar:"http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-korea.jpg"
    },
    {
    id: 4,
    number: 0,
    price: 15000,
    nama:"Ifu Mie",
    gambar:"http://www.dapurkobe.co.id/wp-content/uploads/ifu-mie-ala-kobe.jpg"
    },
    {
    id: 5,
    number: 0,
    price: 10000,
    nama:"Seblak Creamy",
    gambar:"http://www.dapurkobe.co.id/wp-content/uploads/seblak-creamy-mie-bakso.jpg"
    },
    {
    id: 6,
    number: 0,
    price: 10000,
    nama:"Opor Ayam Lebaran",
    gambar:"http://www.dapurkobe.co.id/wp-content/uploads/opor-ayam-lebaran.jpg"
    }
  ],
  total: 0
};

tambahTotalHarga= harga =>{
  this.setState({
    total: this.state.total + harga
  })
}

kurangTotalHarga= harga =>{
  this.setState({
    total: this.state.total - harga
  })
}
  render() {
    return (
      <div align="center">
        
        <Header name="Go-Food" tombol="Home" arah="."/>
        <br></br>
        <Row>
        {this.state.makanan.map(item=>(
          
          <Col xs="12" md="6" lg="4"> <Counter  
          menu={item.nama} 
          gambar={item.gambar}
          tambahTotalHarga={this.tambahTotalHarga}
          kurangTotalHarga={this.kurangTotalHarga}
          ukuran={{ width: "85%" }} 
          harga={item.price}/></Col>
        ))}
        </Row>
        <Jumbotron>
        <p> Total Harga </p>
        <p>{this.state.total}</p>
        <Button tag={Link} to="." color="primary">Back To Home</Button>
      </Jumbotron>
        {/* <Row>
        <Col xs="6"><Counter menu="Mie Rebus" gambar="http://cdn2.tstatic.net/manado/foto/bank/images/mi-instan_20180508_073137.jpg" ukuran={{ width: "100%" }}/></Col>
        <Col xs="6"><Counter menu="Mie Goreng" gambar="http://www.dapurkobe.co.id/wp-content/uploads/mie-goreng-saus-tiram.jpg" ukuran={{ width: "85%" }}/></Col>
       </Row> */}

      </div> 
    );
  }
}

export default Dashboard;
