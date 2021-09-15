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
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let error = Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    }, error => {
      throw Error(error.message);
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const postComment = (dishId, rating, author, comment) => dispatch => {
  const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
  });

  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };
  newComment.date = new Date().toISOString();

  return fetch(commentsUrl, {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }).then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = Error(`Error ${response.status}: ${response.statusText}`);
      error.response = response;
      throw error;
    }
  }, error => {
    throw error;
  }).then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      console.log('post comments', error.message);
      alert(`Your comment could not be posted\nError: ${error.message}`);
    });
};

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
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let error = Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    }, error => {
      throw Error(error.message);
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let error = Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    }, error => {
      console.log(`failed loading promos (2) - ${error.message}`);
      throw Error(error.message);
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}
