import React, { useEffect } from 'react';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';

/**
 *
 * @param {{
 *  dishes: [
 *    {
 *      id: 0,
 *      image: '',
 *      category: '',
 *      label: '',
 *      price: '',
 *      description: '',
 *      comments: [
 *        {
 *          id: 0,
 *          rating: 5,
 *          comment: '',
 *          author: '',
 *          date: ''
 *        }
 *      ]
 *    }
 *  ]
 * }} props
 * @returns
 */
function Menu({dishes, onClick}) {

  useEffect(() => {
    console.log("Menu mounted or updated");
  });

  const menu = dishes.map(dish =>
    (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={onClick}/>
      </div>
    )
  );

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

function RenderMenuItem({dish, onClick}) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <h5 className="card-title">{dish.name}</h5>
      </CardImgOverlay>
    </Card>
  )
}

export default Menu;
