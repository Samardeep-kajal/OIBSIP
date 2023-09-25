import React from "react";
import {
  Container,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.prices[0][item.variant] * item.quantity,
      0
    );
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Pizza</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {item.name} [{item.variant}]
                    </TableCell>
                    <TableCell>
                      <img src={item.image} alt={item.name} width="100" />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          dispatch(
                            addToCart(item, item.quantity - 1, item.variant)
                          )
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </Button>
                      {item.quantity}
                      <Button
                        onClick={() =>
                          dispatch(
                            addToCart(item, item.quantity + 1, item.variant)
                          )
                        }
                        disabled={item.quantity === 10}
                      >
                        +
                      </Button>
                    </TableCell>
                    <TableCell>
                      ₹{item.quantity * item.prices[0][item.variant]}
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => dispatch(deleteFromCart(item))}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ₹{calculateTotal()}
          </Typography>
          <Link to="/">
            <Button variant="contained" sx={{ mt: 2 }}>
              Continue Shopping
            </Button>
          </Link>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
