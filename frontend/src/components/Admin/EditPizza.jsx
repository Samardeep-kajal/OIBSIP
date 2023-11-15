import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  CssBaseline,
  Button,
  TextField,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById, updatePizza } from "../../actions/pizzaAction";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPizza = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [regularPrice, setRegularPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const params = useParams();
  const getPizzaState = useSelector((state) => state.getPizzaByIdReducer);
  const { loading, error, pizza } = getPizzaState;

  const updatePizzaState = useSelector((state) => state.updatePizzaReducer);
  const { updatesuccess, updateloading, updateerror } = updatePizzaState;
  useEffect(() => {
    if (updatesuccess) {
      toast.success("Pizza Updated!");
    }
    if (updateerror) {
      toast.error("Some error Occurred!");
    }
  }, [updatesuccess, updateerror]);

  useEffect(() => {
    dispatch(getPizzaById(params.pizzaId));
  }, [dispatch]);

  useEffect(() => {
    if (pizza && params.pizzaId === pizza._id) {
      setName(pizza.name);
      setDescription(pizza.description);
      setImage(pizza.image);
      setCategory(pizza.category);
      setRegularPrice(pizza.prices[0]["Regular"]);
      setMediumPrice(pizza.prices[0]["Medium"]);
      setLargePrice(pizza.prices[0]["Large"]);
    }
  }, [pizza, params.pizzaId]);

  if (updateloading) {
    return (
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
    );
  }

  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: params.pizzaId,
      name,
      image,
      description,
      category,
      prices: [
        {
          Regular: regularPrice,
          Medium: mediumPrice,
          Large: largePrice,
        },
      ],
    };
    dispatch(updatePizza(updatedPizza));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "10vw",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          width: "90%",
          transition: "height 0.3s",
        }}
      >
        <div
          style={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit Pizza!
          </Typography>
          <form style={{ width: "100%", marginTop: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Pizza Name"
                  name="pizzaName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  required
                />
              </Grid>
              <Typography variant="h6" sx={{ ml: 2, mt: 2 }}>
                Set Prices
              </Typography>
              <Grid item xs={12}>
                <TextField
                  label="For Regular Size..."
                  variant="outlined"
                  type="text"
                  value={regularPrice}
                  onChange={(e) => setRegularPrice(e.target.value)}
                  multiline
                />
                <TextField
                  label="For Medium Size..."
                  variant="outlined"
                  sx={{ ml: 2 }}
                  type="text"
                  value={mediumPrice}
                  onChange={(e) => setMediumPrice(e.target.value)}
                  multiline
                />
                <TextField
                  label="For large Size..."
                  variant="outlined"
                  sx={{ ml: 2 }}
                  type="text"
                  value={largePrice}
                  onChange={(e) => setLargePrice(e.target.value)}
                  multiline
                />
              </Grid>
              <Typography variant="h6" sx={{ ml: 2, mt: 2 }}>
                Add Image
              </Typography>
              <TextField
                label="Image URL here..."
                variant="outlined"
                fullWidth
                sx={{ ml: 2 }}
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                multiline
              />
              <Typography variant="h6" sx={{ ml: 2, mt: 2 }}>
                Add Description
              </Typography>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                sx={{ ml: 2 }}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
              />
              <Typography variant="h6" sx={{ ml: 2, mt: 2 }}>
                Add Category
              </Typography>
              <TextField
                label="Type vegetarian or non-vegetarian"
                variant="outlined"
                fullWidth
                sx={{ ml: 2 }}
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                multiline
              />
            </Grid>
            <Button
              onClick={submitForm}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Pizza
            </Button>
          </form>
        </div>
        <CssBaseline />
      </Paper>
    </div>
  );
};

export default EditPizza;
