import { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

function Main() {
  const [dishes] = useState(DISHES);
  const [selectedDishId, setSelectedDishId] = useState(-1);

  const selectedDish = dishes.find(dish => dish.id === selectedDishId);

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes}
        onClick={(dishId) => setSelectedDishId(dishId)} />
      <DishDetail dish={selectedDish} />
    </div>
  );
}

export default Main;
