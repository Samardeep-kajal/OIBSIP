import React, { useEffect } from "react";
import { getUserOrders } from "../actions/orderAction";
import {
  CircularProgress,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableCell,
  Typography,
  TableHead,
  TableRow,
  Title,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const formatDate = (dateStr) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
};

const OrderHistory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  const userOrderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = userOrderState;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
      >
        <Paper elevation={3} style={{ padding: "16px", width: "80%" }}>
          <Typography variant="h6" gutterBottom>
            Order History
          </Typography>
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
            <h1 style={{ marginTop: "10vh" }}>Something went wrong</h1>
          ) : (
            <Table size="small">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#FFC107" }}>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Date
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Order Amount
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Order Items
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{formatDate(order.createdAt)}</TableCell>
                    <TableCell>{`$${order.orderAmount}`}</TableCell>
                    <TableCell>
                      <ul>
                        {order.orderItems.map((item) => (
                          <li
                            key={item._id}
                          >{`${item.name} (${item.variant})`}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default OrderHistory;
