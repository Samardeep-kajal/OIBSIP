import React from "react";
import { Paper, Typography, CssBaseline } from "@mui/material";

const AddNewPizza = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: "10vh",
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
          Add New Pizza
        </Typography>
      </Paper>
    </div>
  );
};

export default AddNewPizza;
