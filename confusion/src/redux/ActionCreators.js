import * as ActionTypes from './ActionTypes';
import { dishesUrl } from '../shared/baseUrl';

export const fetchDishes = () => dispatch => {
  const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
  });

  const dishesFailed = errorMessage => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMessage
  });

  const addDishes = dishes => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
  });

  dispatch(dishesLoading(true));
  return fetch(dishesUrl)
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
};

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});
