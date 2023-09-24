import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const PizzaCard = ({ pizza }) => {
  const [variant, setvariant] = useState("Regular");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, variant));
  };
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <CardMedia
        component="div"
        sx={{
          pt: "56.25%",
          position: "relative",
        }}
        image={pizza.image}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "red",
            color: "white",
            padding: "4px 8px",
          }}
        >
          ₹ {pizza.prices[0][variant] * quantity}
        </div>
      </CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {pizza.name}
        </Typography>
        <Typography>{pizza.description}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <FormControl
          fullWidth
          variant="outlined"
          sx={{ mt: 1, position: "relative", padding: "5px" }}
        >
          <InputLabel
            htmlFor={`quantity-select-${pizza.name}`}
            sx={{ position: "absolute" }}
          >
            Quantity
          </InputLabel>
          <Select
            labelId={`quantity-select-label-${pizza.name}`}
            id={`quantity-select-${pizza.name}`}
            label="Quantity"
            defaultValue={1}
            sx={{ height: "40px", padding: "5px" }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          fullWidth
          variant="outlined"
          sx={{
            mt: 1,
            position: "relative",
            padding: "5px",
          }}
        >
          <InputLabel
            htmlFor={`size-select-${pizza.name}`}
            sx={{ position: "absolute" }}
          >
            Size
          </InputLabel>
          <Select
            labelId={`size-select-label-${pizza.name}`}
            id={`size-select-${pizza.name}`}
            label="Size"
            defaultValue="Regular"
            sx={{
              height: "40px",
            }}
            value={variant}
            onChange={(e) => setvariant(e.target.value)}
          >
            {pizza.sizes.map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton
          size="small"
          sx={{
            color: "#777",
            mb: 1,
            "&:hover": {
              backgroundColor: "#FFC107",
            },
          }}
          onClick={addToCartHandler}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PizzaCard;
