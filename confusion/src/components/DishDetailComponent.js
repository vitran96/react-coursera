import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FormatDateTime } from '../shared/dateTimeHelper'

function RenderComments({ comments }) {
  const renderedComments = comments.map(comment => (<RenderComment commentObj={comment} />));
  return (
    <div className="col-12 col-md m-1">
      <h4>Comments</h4>
      {renderedComments}
    </div>
  );
}

function RenderComment({ commentObj }) {
  return (
    <div key={commentObj.id}>
      <p>{commentObj.comment}</p>
      <p>-- {commentObj.author}, {commentDateTime(commentObj.date)}</p>
    </div>
  );
}

const commentDateTime = (date) => {
  return FormatDateTime({ year: 'numeric', month: 'short', day: '2-digit' }, date);
};

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <h5 className="card-title">{dish.name}</h5>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function DishDetail({ dish, comments }) {

  if (dish === undefined) {
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
        <RenderComments comments={comments} />
      </div>
    </div>
  );
}

export default DishDetail;
