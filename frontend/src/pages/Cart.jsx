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
import { useSelector } from "react-redux";

const Cart = ({ removeFromCart, updateQuantity }) => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
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
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </Button>
                      {item.quantity}
                      <Button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </TableCell>
                    <TableCell>₹{item.price * item.quantity}</TableCell>
                    <TableCell>
                      <Button onClick={() => removeFromCart(item.id)}>
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
