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

  if (dish === undefined)
    return (
      <div></div>
    );

  const comments = dish.comments.map(comment =>
    (
      <div key={comment.id}>
        <p>{comment.comment}</p>
        <p>-- {comment.author}, {commentDateTime(comment.date)}</p>
      </div>
    )
  );

  return (
    <div className="container">
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
    </div>
  );
}

const commentDateTime = (date) => {
  return FormatDateTime({ year: 'numeric', month: 'short', day: '2-digit'}, date);
};

export default DishDetail;
