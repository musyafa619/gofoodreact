import React,{Component} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Header extends Component {
    render() {
    return (
    <div>    
       <Navbar style={{backgroundColor: "#00CC00"}} color="faded" light>
          <NavbarBrand href="/" className="mr-auto" style={{color:"white"}}><b>Go-Food</b></NavbarBrand>
        </Navbar>
    </div>
    
    );
    }
}