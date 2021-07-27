import { useState } from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Main() {
  const [dishes] = useState(DISHES);
  const [selectedDishId, setSelectedDishId] = useState(-1);

  const selectedDish = dishes.find(dish => dish.id === selectedDishId);

  return (
    <div className="App">
      <Header/>
      <Menu dishes={dishes}
        onClick={(dishId) => setSelectedDishId(dishId)} />
      <DishDetail dish={selectedDish} />
      <Footer/>
    </div>
  );
}

export default Main;
