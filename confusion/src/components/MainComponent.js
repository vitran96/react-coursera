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
  const [comments] = useState(COMMENTS);
  const [promotions] = useState(PROMOTIONS);
  const [leaders] = useState(LEADERS);

  const HomePage = () => {
    return (
      <Home dish={dishes.find(dish => dish.featured)}
        promotion={promotions.find(promo => promo.featured)}
        leader={leaders.find(leader => leader.featured)} />
    );
  };

  const MenuPage = () => {
    return (
      <>
        <Menu dishes={dishes} />
      </>
    );
  };

  const DishWithId = ({match}) => {
    const selectedDishId = parseInt(match.params.dishId, 10);
    const selectedDish = dishes.find(dish => dish.id === selectedDishId);
    const selectedComments = comments.filter(comment => comment.dishId === selectedDishId);
    return (
      <DishDetail dish={selectedDish} comments={selectedComments} />
    );
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
