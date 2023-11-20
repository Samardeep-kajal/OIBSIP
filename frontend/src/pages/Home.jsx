import React, { useEffect } from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaAction";
import PizzaCard from "../components/PizzaCard";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;

  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      navigate("/");
      toast.error("Create an Account First!");
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <CircularProgress sx={{ color: "#FFC107" }} />
        </div>
      ) : error ? (
        <h1>Error while fetching pizzas</h1>
      ) : (
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          ></Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {pizzas.map((pizza) => (
                <Grid item key={pizza.name} xs={12} sm={6} md={4}>
                  <PizzaCard pizza={pizza} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      )}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer"></Box>
    </ThemeProvider>
  );
};

export default Home;
