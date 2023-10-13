import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderAction";

const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subtotal));
    console.log(token);
  };
  return (
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
  );
};

export default Checkout;
