import { combineReducers, createStore } from "redux"
import { Dishes, Comments, Promotions, Leaders } from "./reducer"


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders
    })
  );

  return store;
}
