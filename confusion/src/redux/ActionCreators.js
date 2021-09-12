import * as ActionTypes from './ActionTypes';
import { commentsUrl, dishesUrl, promotionsUrl } from '../shared/baseUrl';

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

export const fetchComments = () => (dispatch) => {
  const commentsFailed = (errorMessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMessage
  });

  const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
  });

  return fetch(commentsUrl)
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const fetchPromos = () => (dispatch) => {
  const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
  });

  const promosFailed = (errorMessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMessage
  });

  const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
  });

  dispatch(promosLoading());

  return fetch(promotionsUrl)
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}
