import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Counter extends Component{
    state = {
        number: 0,
        harga:10000,
        biaya:10000
    };

        Tambah = () => {
        var number = this.state.number;

        this.setState(({number, harga, biaya}) => ({
            number: number + 1
        })) ;

        if (number > 0) {
            this.setState(({number, harga, biaya}) => ({
                harga: harga + biaya
            })) ;
        }
        
        };
        Kurang = () => {
        var number = this.state.number;

        if (number > 1) {
            this.setState(({number, harga, biaya}) => ({
                harga: harga - biaya
            })) ;
        }
        if (number > 0) {
            this.setState(({number, harga, biaya}) => ({
                number: number - 1
            })) ;
        }
        };

        render(){
            // function Tambah() {
            //     alert("clicked");
            // }

            return(
                <div>
                    <Card style={this.props.ukuran} style={{margin: "10px"}}>
                    <CardImg top width="100%" src={this.props.gambar} alt="makanan"/>
                    <CardBody>
                    <br/>
                    <CardTitle><h4 align="center">{this.props.menu}</h4></CardTitle>

                    
                    
                    <h3>Harga : Rp {this.state.harga}</h3>
                    <div align="center">
                    <br></br>
                    <hr/>
                    <CardSubtitle align="center">Pesan Berapa</CardSubtitle>
                    <Navbar style={{backgroundColor: "white"}} color="faded" light>
                    <Button onClick={this.Kurang} color="danger">-</Button>{' '}
                    <h2 align="center">{this.state.number}</h2>
                    <Button onClick={this.Tambah} color="success">+</Button>{' '}
                     </Navbar>
                    
                    </div>
                    </CardBody>
                    </Card>
                </div>
            )
        }
}