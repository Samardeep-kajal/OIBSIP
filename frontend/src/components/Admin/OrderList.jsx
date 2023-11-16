import React, { useEffect } from "react";
import { Paper, Typography, CssBaseline } from "@mui/material";
import { useDispatch } from "react-redux";
import { getAllOrders } from "../../actions/orderAction";

const OrderList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "10vw",
      }}
    >
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          width: "100%",
          transition: "height 0.3s",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Order List
        </Typography>
      </Paper>
    </div>
  );
};

export default OrderList;
