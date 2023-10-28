import React, { useState } from "react";
import { Paper, Button, CssBaseline, Typography } from "@mui/material";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import UserList from "../Admin/UserList";
import PizzaList from "../Admin/PizzaList";
import AddNewPizza from "../Admin/AddNewPizza";
import OrderList from "../Admin/OrderList";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", marginTop: "10vh" }}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "5vw",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/admin/userlist")}
            sx={{ marginBottom: 2 }}
          >
            View Users
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/admin/pizzalist")}
            sx={{ marginBottom: 2 }}
          >
            View Pizzas
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/admin/orderlist")}
            sx={{ marginBottom: 2 }}
          >
            View Orders
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/admin/addnewpizza")}
            sx={{ marginBottom: 2 }}
          >
            Add New Pizza
          </Button>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<UserList />} exact />
            <Route path="/userlist" element={<UserList />} exact />
            <Route path="/pizzalist" element={<PizzaList />} exact />
            <Route path="/addnewpizza" element={<AddNewPizza />} exact />
            <Route path="/orderlist" element={<OrderList />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
