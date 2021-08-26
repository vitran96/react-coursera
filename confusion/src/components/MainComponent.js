import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
}

function Main({dishes, comments, promotions, leaders}) {

  const HomePage = () => {
    return (
      <Home dish={dishes.find(dish => dish.featured)}
        promotion={promotions.find(promo => promo.featured)}
        leader={leaders.find(leader => leader.featured)} />
    );
  };

  const MenuPage = () => {
    return (
      <Menu dishes={dishes} />
    );
  };

  const AboutPage = () => {
    return (
      <About employees={leaders} />
    );
  }

  const DishWithId = ({ match }) => {
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
        <Route exact path="/aboutus" component={AboutPage} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps)(Main));
