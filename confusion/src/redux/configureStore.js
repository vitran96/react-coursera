import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Dishes, Comments, Promotions, Leaders } from "./reducer"


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}
