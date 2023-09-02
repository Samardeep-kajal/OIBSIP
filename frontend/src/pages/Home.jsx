import React from "react";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  Box,
  Toolbar,
  Typography,
  Container,
  IconButton,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import pizzas from "../pizzas";

const defaultTheme = createTheme();

const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Our Pizzas!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Indulge in a Culinary Adventure: Explore Our Scrumptious Pizza
              Selection
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {pizzas.map((pizza) => (
              <Grid item key={pizza} xs={12} sm={6} md={4}>
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
                    }}
                    image={pizza.image}
                  />
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
                        htmlFor="quantity-select"
                        sx={{ position: "absolute" }}
                      >
                        Quantity
                      </InputLabel>
                      <Select
                        labelId="quantity-select-label"
                        id="quantity-select"
                        label="Quantity"
                        defaultValue={1}
                        sx={{ height: "40px", padding: "5px" }}
                      >
                        {Array.from({ length: 10 }, (_, i) => (
                          <MenuItem value={i + 1} key={i + 1}>
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
                        htmlFor="size-select"
                        sx={{ position: "absolute" }}
                      >
                        Size
                      </InputLabel>
                      <Select
                        labelId="size-select-label"
                        id="size-select"
                        label="Size"
                        defaultValue="Regular"
                        sx={{
                          height: "40px",
                        }}
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
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Home;
