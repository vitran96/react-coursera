import React, { useRef, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, ModalHeader, ModalBody, Modal, Button, FormGroup, Form, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let usernameInput = useRef({});
  let passwordInput = useRef({});
  let rememberedInput = useRef({});

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const onSubmit = (event) => {
    alert("Username: " + usernameInput.value + " Password: " + passwordInput.value + " Remember: " + rememberedInput.checked);
    this.toggleModal();
    event.preventDefault();
  }

  return (
    <>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img src="/assets/images/logo.png" height="30" width="41"
              alt="Ristorante Con Fusion" />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
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
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"> Menu</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"> Contact us</span>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in fa-lg"></span> Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
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
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" name="username" innerRef={input => usernameInput = input} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" innerRef={input => passwordInput = input} />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="remember" innerRef={input => rememberedInput = input} />Remember me
              </Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Login</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default Header;
