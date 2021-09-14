import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { addComment, fetchComments, fetchDishes, fetchPromos } from '../redux/ActionCreators';
import { useEffect } from 'react';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishesState: state.dishes,
    commentsState: state.comments,
    promotionsState: state.promotions,
    leadersState: state.leaders
  };
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => dispatch(actions.reset('feedback')),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

function Main(props) {
  const {dishesState, commentsState, promotionsState, leadersState} = props;
  const {addComment, fetchDishes, resetFeedbackForm, fetchComments, fetchPromos} = props;

  useEffect(() => {
    fetchDishes();
    fetchComments();
    fetchPromos();
  }, []);

  const HomePage = () => {
    return (
      <Home dish={dishesState.dishes.find(dish => dish.featured)}
        dishesIsLoading={dishesState.isLoading}
        dishesErrorMessage={dishesState.errorMessage}
        promotion={promotionsState.promotions.find(promo => promo.featured)}
        promotionsIsLoading={promotionsState.isLoading}
        promotionsErrorMessage={promotionsState.errorMessage}
        leader={leadersState.find(leader => leader.featured)} />
    );
  };

  const MenuPage = () => {
    return (
      <Menu dishesState={dishesState} />
    );
  };

  const AboutPage = () => {
    return (
      <About employees={leadersState} />
    );
  }

  const ContactPage = () => {
    return (
      <Contact resetFeedbackForm={resetFeedbackForm} />
    );
  }

  const DishWithId = ({ match }) => {
    const selectedDishId = parseInt(match.params.dishId, 10);
    const selectedDish = dishesState.dishes.find(dish => dish.id === selectedDishId);
    const selectedComments = commentsState.comments.filter(comment => comment.dishId === selectedDishId);
    return (
      <DishDetail
        dish={selectedDish}
        dishIsLoading={dishesState.isLoading}
        dishErrorMessage={dishesState.errorMessage}
        comments={selectedComments}
        commentsErrorMessage={commentsState.errorMessage}
        addComment={addComment} />
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
        <Route exact path="/contactus" component={ContactPage} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
