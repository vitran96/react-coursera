import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="assets/images/logo.png" height="30" width="41"
              alt="Ristorante Con Fusion" />
          </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-home fa-lg"> Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutus">
                <span className="fa fa-info fa-lg"> About us</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-list fa-lg"> Menu</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <span className="fa fa-address-card fa-lg"> Contact us</span>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="row row-header">
          <div className="col-12 col-sm-6">
            <h1>Ristorante Con Fusion</h1>
            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmaking creations will tickle your culinary sense!</p>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default Header;
