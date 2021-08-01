import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

const ContactTypes = {
  TEL: "Tel."
  , EMAIL: "Email"
}

const initFormValue = {
  firstname: ''
  , lastname: ''
  , telnum: ''
  , email: ''
  , agree: false
  , contactType: ContactTypes.TEL
  , message: ''
}

function ContactForm() {
  const [formValues, setFormValues] = useState(initFormValue);

  const update = event => {
    const target = event.target;
    setFormValues(currentValues => ({
      ...currentValues
      , [target.name]: target.value
    }));
  }

  const submit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    alert(JSON.stringify(formValues));
  }

  return (
    <Form onSubmit={submit}>
      <FormGroup row>
        <Label for="firstname" md={2}>First Name</Label>
        <Col md={10}>
          <Input type="text" id="firstname" name="firstname"
            placeholder="First Name"
            value={formValues.firstname} onChange={update} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastname" md={2}>Last Name</Label>
        <Col md={10}>
          <Input type="text" id="lastname" name="lastname"
            placeholder="Last Name"
            value={formValues.lastname} onChange={update} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="telnum" md={2}>Contact Tel.</Label>
        <Col md={10}>
          <Input type="tel" id="telnum" name="telnum"
            placeholder="Tel. Number"
            value={formValues.telnum} onChange={update} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" md={2}>Email</Label>
        <Col md={10}>
          <Input type="email" id="email" name="email"
            placeholder="Email"
            value={formValues.email} onChange={update} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md={{ size: 6, offset: 2 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="agree"
                checked={formValues.agree} onChange={update} />
              <strong>May we contact you?</strong>
            </Label>
          </FormGroup>
        </Col>
        <Col md={{ size: 3, offset: 1 }}>
          <Input type="select" name="contactType"
            value={formValues.contactType} onChange={update}>
            <option>{ContactTypes.TEL}</option>
            <option>{ContactTypes.EMAIL}</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label htmlFor="message" md={2}>Your Feedback</Label>
        <Col md={10}>
          <Input type="textarea" id="message" name="message"
            rows="12"
            value={formValues.message} onChange={update} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md={{ size: 10, offset: 2 }}>
          <Button type="submit" color="primary">Send Feedback</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Contact us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road<br />
            Clear Water Bay, Kowloon<br />
            HONG KONG<br />
            <i className="fa fa-phone"></i>: +852 1234 5678<br />
            <i className="fa fa-fax"></i>: +852 8765 4321<br />
            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone" /> Call</a>
            <a role="button" className="btn btn-info"><i className="fa fa-skype" /> Skype</a>
            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o" /> Email</a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us Your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
