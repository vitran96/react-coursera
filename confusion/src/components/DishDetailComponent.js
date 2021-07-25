import React, { useEffect } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { FormatDateTime } from '../shared/dateTimeHelper'

/**
 *
 * @param {{
 *  dish: {
 *    id: 0,
 *    image: '',
 *    category: '',
 *    label: '',
 *    price: '',
 *    description: '',
 *    comments: [
 *      {
 *        id: 0,
 *        rating: 5,
 *        comment: '',
 *        author: '',
 *        date: ''
 *      }
 *    ]
 *  }
 * }} props
 * @returns
 */
function DishDetail({dish}) {

  useEffect(() => {
    console.log("DishDetail mounted or updated");
  });

  useEffect(() => {
    return () => {
      console.log('DishDetail unmounted');
    };
  }, []);

  if (dish === undefined) {
    return (
      <div></div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={dish}/>
        <RenderComments comments={dish.comments}/>
      </div>
    </div>
  );
}

function RenderDish({dish}) {
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

function RenderComments({comments}) {
  const renderedComments = comments.map(comment => (<RenderComment commentObj={comment}/>));
  return (
    <div className="col-12 col-md m-1">
      <h4>Comments</h4>
      {renderedComments}
    </div>
  );
}

function RenderComment({commentObj}) {
  return (
    <div key={commentObj.id}>
      <p>{commentObj.comment}</p>
      <p>-- {commentObj.author}, {commentDateTime(commentObj.date)}</p>
    </div>
  );
}

const commentDateTime = (date) => {
  return FormatDateTime({ year: 'numeric', month: 'short', day: '2-digit'}, date);
};

export default DishDetail;
