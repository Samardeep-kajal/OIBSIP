import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const res = await axios.post("http://localhost:5005/api/order/placeorder", {
      token,
      subtotal,
      currentUser,
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
    dispatch({ type: "PLACE_ORDER_FAIL" });
    console.log(error);
  }
};
