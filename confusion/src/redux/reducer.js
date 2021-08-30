import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = DISHES, action) => {
  return state;
}

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return state.concat(comment);
    default:
      return state;
  }
}

export const Promotions = (state = PROMOTIONS, action) => {
  return state;
}

export const Leaders = (state = LEADERS, action) => {
  return state;
}
