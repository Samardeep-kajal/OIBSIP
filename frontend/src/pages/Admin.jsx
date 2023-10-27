import React, { useState } from "react";
import { Paper, Button, CssBaseline, Typography } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import UserList from "../../Admin/UserList";
import PizzaList from "../../Admin/PizzaList";
import AddNewPizza from "../../Admin/AddNewPizza";
import OrderList from "../../Admin/OrderList";

const Admin = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div>
      <h2>Admin Panel</h2>
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
            onClick={() => setSelectedButton("users")}
            sx={{ marginBottom: 2 }}
          >
            View Users
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSelectedButton("pizzas")}
            sx={{ marginBottom: 2 }}
          >
            View Pizzas
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSelectedButton("orders")}
            sx={{ marginBottom: 2 }}
          >
            View Orders
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSelectedButton("addPizza")}
            sx={{ marginBottom: 2 }}
          >
            Add New Pizza
          </Button>
        </div>
        <div
          style={{
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "16px",
              width: "100%",
              transition: "height 1s",
              height: selectedButton ? "auto" : "0",
              marginLeft: "5vw",
            }}
          >
            {selectedButton === "users" && (
              <Typography variant="h6" gutterBottom>
                Data for Users
              </Typography>
            )}
            {selectedButton === "pizzas" && (
              <Typography variant="h6" gutterBottom>
                Data for Pizzas
              </Typography>
            )}
            {selectedButton === "orders" && (
              <Typography variant="h6" gutterBottom>
                Data for Orders
              </Typography>
            )}
            {selectedButton === "addPizza" && (
              <Typography variant="h6" gutterBottom>
                Add New Pizza Form
              </Typography>
            )}
            {/* Add your data components here */}
          </Paper>
        </div>
        <div>
          <Switch>
            <Route path="/admin/userlist" Component={UserList} exact />
            <Route path="/admin/pizzalist" Component={PizzaList} exact />
            <Route path="/admin/addnewpizza" Component={AddNewPizza} exact />
            <Route path="/admin/orderlist" Component={OrderList} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;
