import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function Dish({dish}) {
  const comments = dish.comments.map(comment =>
    (
      <div key={comment.id}>
        <p>{comment.comment}</p>
        <p>-- {comment.author}, {comment.date}</p>
      </div>
    )
  );

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <h5 className="card-title">{dish.name}</h5>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md m-1">
        <h4>Comments</h4>
        {comments}
      </div>
    </div>
  );
}

export default Dish;
