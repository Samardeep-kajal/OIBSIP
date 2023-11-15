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

export const getPizzaById = (pizzaId) => async (dispatch) => {
  dispatch({ type: "GET_PIZZA_BYID_REQUEST" });
  try {
    const response = await axios.post("/api/pizza/getpizzabyid", { pizzaId });
    dispatch({ type: "GET_PIZZA_BYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZA_BYID_FAIL", payload: error });
  }
};

export const updatePizza = (updatedPizza) => async (dispatch) => {
  dispatch({ type: "UDPATE_PIZZA_REQUEST" });
  try {
    const response = await axios.post("/api/pizza/updatepizza", {
      updatedPizza,
    });
    dispatch({ type: "UDPATE_PIZZA_SUCCESS", payload: response.data });
    window.location.href = "/admin/pizzalist";
  } catch (error) {
    dispatch({ type: "UDPATE_PIZZA_FAIL", payload: error });
  }
};
