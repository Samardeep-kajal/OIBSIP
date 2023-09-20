import axios from "axios";

export const getAllPizza = () => async (dispatch) => {
  dispatch({ type: GET_PIZZA_REQUEST });
  try {
    const res = await axios.get("/api/pizzas/getPizzas");
    console.log(res);
    dispatch({ type: "GET_PIZZA_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "GET_PIZZA_FAIL", payload: res.data });
  }
};
