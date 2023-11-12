import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { addPizzaReducer, getAllPizzaReducer } from "./reducers/pizzaReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
} from "./reducers/orderReducer";

const rootReducer = combineReducers({
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  addPizzaReducer: addPizzaReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
