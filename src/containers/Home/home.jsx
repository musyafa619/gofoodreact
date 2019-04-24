import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Jumbo from "../../components/jumbotron";
import Header from '../../components/header';


export default class home extends Component {
  render() {
    return (
        <div>
            <Header name="Home" tombol="Order Now" arah="./dashboard"/>
            <Jumbo title="Go Food" judul="Pesan Makanan Disini"/>
        </div>
      )
  }
  }
