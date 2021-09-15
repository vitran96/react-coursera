import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const Dishes = (state = {
  isLoading: true,
  errorMessage: null,
  dishes: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        dishes: action.payload.map(dish => { return { ...dish, image: `${baseUrl}/${dish.image}` } })
      };
    case ActionTypes.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        dishes: []
      };
    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        dishes: []
      };
    default:
      return state;
  }
}

export const Comments = (state = { errorMessage: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.payload)
      };
    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        errorMessage: action.payload,
        comments: []
      };
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        errorMessage: null,
        comments: action.payload
      };
    default:
      return state;
  }
}

export const Promotions = (state = {
  isLoading: true,
  errorMessage: null,
  promotions: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        promotions: action.payload.map(promo => { return { ...promo, image: `${baseUrl}/${promo.image}` } })
      };
    case ActionTypes.PROMOS_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
        promotions: []
      };
    case ActionTypes.PROMOS_FAILED:
      console.log(`reducer - promos failed - ${action.payload}`);
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        promotions: []
      };
    default:
      return state;
  }
};

export const Leaders = (state = LEADERS, action) => {
  return state;
}
