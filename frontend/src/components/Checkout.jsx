import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button, CircularProgress, CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { placeOrder } from "../actions/orderAction";

const defaultTheme = createTheme();

const Checkout = ({ subtotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subtotal));
    // console.log(token);
  };
  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         minHeight: "100vh", // Ensures it covers the entire viewport
  //       }}
  //     >
  //       <CircularProgress sx={{ color: "#FFC107" }} />
  //     </div>
  //   );
  // }
  // if (error) {
  //   return <h1 style={{ marginTop: "10vh" }}>Something went wrong</h1>;
  // }
  return (
    // <ThemeProvider theme={defaultTheme}>
    //   <CssBaseline />
    <StripeCheckout
      amount={subtotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51O03ZgSAevgwFYHio52rmqbeJ6k2DPOoT1BevEZuUMBRfVeKTZlhj74r2eyXzRA2drv9u9ITcs3H4KwQz4F2wu0P00Hd2s87HG"
      currency="INR"
    >
      <Button variant="contained" sx={{ mt: 2, ml: 2 }}>
        Checkout
      </Button>
    </StripeCheckout>
    // </ThemeProvider>
  );
};

export default Checkout;
