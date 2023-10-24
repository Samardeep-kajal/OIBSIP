import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const res = await axios.post("/api/order/placeorder", {
      token,
      subtotal,
      currentUser: {
        username: currentUser.username,
        email: currentUser.email,
        _id: currentUser._id,
      },
      cartItems,
    });
    if (res.data.message === "Payment Success") {
      window.location.href = res.data.redirectUrl;
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
    } else {
      dispatch({ type: "PLACE_ORDER_FAIL" });
    }
    console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAIL", payload: error });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "USER_ORDER_REQUEST" });
  try {
    const response = await axios.post("/api/order/userorders", {
      userid: currentUser._id,
    });
    console.log(response);
    dispatch({ type: "USER_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_ORDER_FAIL", payload: error });
  }
};
