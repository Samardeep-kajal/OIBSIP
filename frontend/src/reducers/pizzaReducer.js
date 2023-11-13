export const getAllPizzaReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZA_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZA_SUCCESS":
      return {
        pizzas: action.payload,
        loading: false,
      };
    case "GET_PIZZA_FAIL":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZAS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_PIZZAS_SUCCESS":
      return {
        pizzas: action.payload,
        success: true,
        loading: false,
      };
    case "ADD_PIZZAS_FAIL":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZA_BYID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PIZZA_BYID_SUCCESS":
      return {
        pizza: action.payload,
        success: true,
        loading: false,
      };
    case "GET_PIZZA_BYID_FAIL":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
