import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import Dish from './DishComponent';

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
function Menu({dishes}) {
  const [selectedDish, setSelectedDish] = useState(null);
  const menu = dishes.map(dish =>
    (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => setSelectedDish(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <h5 className="card-title">{dish.name}</h5>
          </CardImgOverlay>
        </Card>
      </div>
    )
  );

  const selectedDishDetail = selectedDish != null
    ? (
        <Dish dish={selectedDish}/>
    )
    : (
        <div></div>
    );

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
      {selectedDishDetail}
    </div>
  );
}

export default Menu;
