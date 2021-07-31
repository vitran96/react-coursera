import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';

function Main() {
  const [dishes] = useState(DISHES);
  const [comments] = useState(COMMENTS)
  const [promotions] = useState(PROMOTIONS)
  const [leaders] = useState(LEADERS)
  const [selectedDishId, setSelectedDishId] = useState(-1);

  const selectedDish = dishes.find(dish => dish.id === selectedDishId);

  const HomePage = () => {
    return (
      <Home dish={dishes.filter(dish => dish.featured)[0]}
        promotion={promotions.filter(promo => promo.featured)[0]}
        leader={leaders.filter(leader => leader.featured)[0]} />
    );
  };

  const selectDish = (dishId) => setSelectedDishId(dishId);

  const MenuPage = () => {
    return (
      <>
        <Menu dishes={dishes} onClick={selectDish} />
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
