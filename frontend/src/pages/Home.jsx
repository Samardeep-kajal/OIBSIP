import React from "react";
import {
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
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import pizzas from "../pizzas";
import PizzaCard from "../components/PizzaCard";

const defaultTheme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

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
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer"></Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Home;
