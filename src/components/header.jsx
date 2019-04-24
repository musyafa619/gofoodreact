import React,{Component} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
    return (
    <div>    
       <Navbar style={{backgroundColor: "#00CC00"}} color="faded" light>
          <NavbarBrand href="/" className="mr-auto" style={{color:"white"}}><b>{this.props.name}</b></NavbarBrand>
          <Button tag={Link} to={this.props.arah} color="success">{this.props.tombol}</Button>
        </Navbar>
    </div>
    
    );
    }
}