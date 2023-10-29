import React, { useEffect } from "react";
import {
  Paper,
  AppBar,
  Box,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  CircularProgress,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { getAllPizzas } from "../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import PizzaCard from "../components/PizzaCard";

const defaultTheme = createTheme();

const PizzaList = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzaState;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
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
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default PizzaList;
