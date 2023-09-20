export const getAllPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZA_REQUEST":
      return {
        ...state,
      };
    case "GET_PIZZA_SUCCESS":
      return {
        pizza: action.payload,
      };
    case "GET_PIZZA_FAIL":
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};
