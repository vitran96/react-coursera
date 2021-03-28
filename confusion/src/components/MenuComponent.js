import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function Menu(props) {
  const [selectedDish, setSelectedDish] = useState(null);

  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card onClick={() => setSelectedDish(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  const selectedDishDetail = () => {
    if (selectedDish != null) {
        return (
            <Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                <CardTitle>{selectedDish.name}</CardTitle>
                <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return (
            <div></div>
        );
    }
  };

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
      <div className="row">
          {selectedDishDetail()}
      </div>
    </div>
  );
}

export default Menu;
