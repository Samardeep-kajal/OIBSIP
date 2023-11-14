import React, { useEffect } from "react";
import { Button, CssBaseline } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserList from "../components/Admin/UserList";
import PizzaList from "../components/Admin/PizzaList";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import EditPizza from "../components/Admin/EditPizza";

const Admin = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      navigate("/");
    }
  }, []);
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
            marginTop: "5vh",
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
            <Route path="/editpizza/:pizzaId" element={<EditPizza />} />
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
