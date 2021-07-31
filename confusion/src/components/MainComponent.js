import { useState } from 'react';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';

function Main() {
  const [dishes] = useState(DISHES);
  const [selectedDishId, setSelectedDishId] = useState(-1);

  const selectedDish = dishes.find(dish => dish.id === selectedDishId);

  const HomePage = () => {
    return (
      <Home />
    );
  };

  const selectDish = (dishId) => setSelectedDishId(dishId);

  const MenuPage = () => {
    return (
      <>
        <Menu dishes={dishes}
          onClick={selectDish} />
        <DishDetail dish={selectedDish} />
      </>
    );
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
