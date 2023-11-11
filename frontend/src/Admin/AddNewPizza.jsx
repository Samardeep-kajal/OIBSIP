import React, { useState } from "react";
import {
  Paper,
  Typography,
  CssBaseline,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const AddNewPizza = () => {
  const [name, setName] = useState("");
  const [regularPrice, setRegularPrice] = useState();
  const [largePrice, setLargePrice] = useState();
  const [mediumPrice, setMediumPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        Regular: regularPrice,
        Medium: mediumPrice,
        Large: largePrice,
      },
    };
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
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          width: "100%",
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
            Add New Pizza
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
              Add Pizza
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default AddNewPizza;
