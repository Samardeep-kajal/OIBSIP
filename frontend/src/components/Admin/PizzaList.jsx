import React, { useEffect } from "react";
import {
  Paper,
  CssBaseline,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { getAllPizzas } from "../../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";

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
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Pizza Name</TableCell>
                    <TableCell align="right">Prices ⟨₹⟩</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pizzas &&
                    pizzas.map((pizza) => (
                      <TableRow
                        key={pizza.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <img src={pizza.image} width="90vw" />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {pizza.name}
                        </TableCell>
                        <TableCell align="right">
                          Regular : {pizza.prices[0]["Regular"]}
                          <br />
                          Medium : {pizza.prices[0]["Medium"]}
                          <br />
                          Large : {pizza.prices[0]["Large"]}
                        </TableCell>
                        <TableCell align="right">{pizza.category}</TableCell>
                        <TableCell align="right">
                          <AiFillEdit /> &nbsp; <AiFillDelete />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default PizzaList;
