import React from "react";
import { Paper, Typography, CssBaseline } from "@mui/material";

const OrderList = () => {
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
