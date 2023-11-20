import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CssBaseline,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../actions/orderAction";

const OrderList = () => {
  const dispatch = useDispatch();
  const allOrderState = useSelector((state) => state.getAllUserOrderReducer);

  const { loading, error, orders } = allOrderState;

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateTimeString).toLocaleDateString("en-GB", options);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "2vw",
        marginRight: "2vw",
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
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Pizzas</TableCell>
                <TableCell>Total Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Transaction ID</TableCell>
                {/* Add more columns based on your order details */}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders &&
                orders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.email}</TableCell>
                    <TableCell style={{ textAlign: "center" }}>
                      <ul>
                        {order.orderItems.map((item) => (
                          <li key={item._id}>
                            {item.name}({item.quantity})
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell>₹{order.orderAmount}/-</TableCell>
                    <TableCell>{formatDateTime(order.createdAt)}</TableCell>
                    <TableCell>{order.transactionId}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default OrderList;
