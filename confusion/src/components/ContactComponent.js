import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Col, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

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

const initTouchableFields = {
  firstname: false
  , lastname: false
  , telnum: false
  , email: false
}

const TEL_NUM_REG = /^\d+$/;

function ContactForm() {
  const [formValues, setFormValues] = useState(initFormValue);
  const [touchedFields, setTouchedFields] = useState(initTouchableFields);

  const onChange = event => {
    const target = event.target;
    setFormValues(currentValues => ({
      ...currentValues
      , [target.name]: target.value
    }));
  };

  const onSubmit = (e) => {
    alert(JSON.stringify(formValues));
    e.preventDefault();
  };

  const onBlur = (event) => {
    const target = event.target;
    setTouchedFields(currentValues => ({
      ...currentValues
      , [target.name]: true
    }));
  };

  const validateFirstname = (firstname, touched) => {
    console.log(firstname.length);
    if (!touched)
      return '';

    if (firstname.length < 0)
      return 'First name should be more than 2 characters';
    else if (firstname.length > 10)
      return 'First name should be less than 10 characters';

    return '';
  }

  const validateLastname = (lastname, touched) => {
    if (!touched)
      return '';

    if (lastname.length < 2)
      return 'Last name should be more than 2 characters';
    else if (lastname.length > 10)
      return 'Last name should be less than 10 characters';

    return '';
  }

  const validateTelnum = (telnum, touched) => {
    if (!touched)
      return '';

    if (!TEL_NUM_REG.test(telnum))
      return 'Tel. Number should contain only number';

    return '';
  }

  const validateEmail = (email, touched) => {
    if (!touched)
      return '';

    const hasMoreThan1At = email.split('')
      .filter(char => char === '@')
      .length !== 1;
    if (hasMoreThan1At)
      return 'Email should has only 1 "@"';

    return '';
  }

  const validate = (firstname, lastname, telnum, email) => {
    return {
      firstname: validateFirstname(firstname, touchedFields.firstname)
      , lastname: validateLastname(lastname, touchedFields.lastname)
      , telnum: validateTelnum(telnum, touchedFields.telnum)
      , email: validateEmail(email, touchedFields.email)
    }
  };

  const errors = validate(
    formValues.firstname
    , formValues.lastname
    , formValues.telnum
    , formValues.email
  );

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup row>
        <Label for="firstname" md={2}>First Name</Label>
        <Col md={10}>
          <Input type="text" id="firstname" name="firstname"
            placeholder="First Name"
            value={formValues.firstname}
            valid={errors.firstname === ''}
            invalid={errors.firstname !== ''}
            onBlur={onBlur}
            onChange={onChange} />
          <FormFeedback>{errors.firstname}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="lastname" md={2}>Last Name</Label>
        <Col md={10}>
          <Input type="text" id="lastname" name="lastname"
            placeholder="Last Name"
            value={formValues.lastname}
            valid={errors.lastname === ''}
            invalid={errors.lastname !== ''}
            onBlur={onBlur}
            onChange={onChange} />
          <FormFeedback>{errors.lastname}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="telnum" md={2}>Contact Tel.</Label>
        <Col md={10}>
          <Input type="tel" id="telnum" name="telnum"
            placeholder="Tel. Number"
            value={formValues.telnum}
            valid={errors.telnum === ''}
            invalid={errors.telnum !== ''}
            onBlur={onBlur}
            onChange={onChange} />
          <FormFeedback>{errors.telnum}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" md={2}>Email</Label>
        <Col md={10}>
          <Input type="email" id="email" name="email"
            placeholder="Email"
            value={formValues.email}
            valid={errors.email === ''}
            invalid={errors.email !== ''}
            onBlur={onBlur}
            onChange={onChange} />
          <FormFeedback>{errors.email}</FormFeedback>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md={{ size: 6, offset: 2 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="agree"
                checked={formValues.agree} onChange={onChange} />
              <strong>May we contact you?</strong>
            </Label>
          </FormGroup>
        </Col>
        <Col md={{ size: 3, offset: 1 }}>
          <Input type="select" name="contactType"
            value={formValues.contactType} onChange={onChange}>
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
            value={formValues.message} onChange={onChange} />
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
