import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZA_REQUEST" });
  try {
    const res = await axios.get("/api/pizza/getAllPizzas");
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZA_FAIL", payload: err });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAS_REQUEST" });
  try {
    const response = await axios.post("/api/pizza/addpizza", pizza);
    dispatch({ type: "ADD_PIZZAS_SUCCESS", payload: response.data });
    console.log(response);
  } catch (error) {
    dispatch({ type: "ADD_PIZZAS_FAIL", payload: error });
  }
};
