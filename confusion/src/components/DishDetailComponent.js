import React, { useState } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardImg, CardText, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { FormatDateTime } from '../shared/dateTimeHelper';
import { Loading } from './LoadingComponent';
import { FadeTransform, Stagger, Fade } from 'react-animation-components';

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

function CommentForm(props) {
  const { dishId, postComment } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const onSubmit = (values) => {
    toggleModal();
    postComment(dishId, values.rating, values.name, values.message);
  };
  return (
    <>
      <Button outline onClick={toggleModal}>
        <span className="fa fa-pencil"></span> Submit Comment
      </Button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={values => onSubmit(values)}>
            <Row className="form-group mx-1">
              <Label htmlFor="rating" >Rating</Label>
              <Control.select model=".rating" name="rating"
                className="form-control" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Control.select>
            </Row>
            <Row className="form-group mx-1">
              <Label htmlFor="name" >Your name</Label>
              <Control.text model=".name" id="name" name="name"
                className="form-control"
                placeholder="Your Name"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15)
                }} />
              <Errors className="text-danger"
                model=".name"
                show="touched"
                messages={{
                  required: 'Required. ',
                  minLength: 'Must be greater than 2 characters. ',
                  maxLength: 'Must be less than 15 characters. '
                }} />
            </Row>
            <Row className="form-group mx-1">
              <Label htmlFor="message">Comment</Label>
              <Control.textarea model=".message" id="message" name="message"
                className="form-control"
                rows="6" />
            </Row>
            <Row className="form-group mx-1">
              <Button type="submit" color="primary">Submit</Button>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </>
  )
}

function RenderComments(props) {
  const { comments, postComment, errorMessage } = props;
  const { dishId } = props;
  if (errorMessage) {
    return (
      <h4>{errorMessage}</h4>
    );
  }

  const renderedComments = comments.map(comment => (
    <RenderComment commentObj={comment} key={comment.id} />
  ));

  return (
    <div className="col-12 col-md m-1">
      <h4>Comments</h4>
      <Stagger in>{renderedComments}</Stagger>
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  );
}

function RenderComment({ commentObj }) {
  return (
    <Fade in>
      <p>{commentObj.comment}</p>
      <p>-- {commentObj.author}, {commentDateTime(commentObj.date)}</p>
    </Fade>
  );
}

const commentDateTime = (date) => {
  return FormatDateTime({ year: 'numeric', month: 'short', day: '2-digit' }, date);
};

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}
      >
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <h5 className="card-title">{dish.name}</h5>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    </div>
  );
}

function DishDetail(props) {
  const { dish, dishIsLoading, dishErrorMessage } = props;
  const { comments, postComment, commentsErrorMessage } = props;

  if (dishIsLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (dishErrorMessage) {
    return (
      <div className="container">
        <div className="row">
          <h4>{dishErrorMessage}</h4>
        </div>
      </div>
    );
  } else if (dish === undefined) {
    return (
      <div></div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={dish} />
        <RenderComments
          comments={comments}
          errorMessage={commentsErrorMessage}
          dishId={dish.id}
          postComment={postComment}
        />
      </div>
    </div>
  );
}

export default DishDetail;
