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
      // window.location.href = res.data.redirectUrl;
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
