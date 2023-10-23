import React, { useState } from "react";
import {
  AppBar,
  MenuItem,
  Toolbar,
  Typography,
  styled,
  IconButton,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
  height: "60px",
  color: "darkslategray",
  backgroundColor: "#FFC107",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  fontWeight: "bold",
});
const MenuItems = styled("div")({
  marginLeft: "25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

const UserMenu = styled("div")({
  marginLeft: "auto",
});

const TopNav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = false;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const cartState = useSelector((state) => state.cartReducer);
  return (
    <StyledAppBar position="static" sx={{ zIndex: 1000 }}>
      <Toolbar>
        <img
          src="https://i.ibb.co/qyPkYfV/favicon-ico.png"
          style={{ maxWidth: "50px", marginRight: "10px", marginTop: "-5px" }}
        />
        <Typography variant="h6">Savvy Slice!</Typography>
        <MenuItems>
          <MenuItem>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Typography textAlign="center">Home</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/explore"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography textAlign="center">Explore</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Typography textAlign="center">Contact Us</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "black",
                verticalAlign: "middle",
              }}
            >
              <ShoppingCartCheckoutIcon
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginTop: "5px",
                }}
              />
              <span style={{ marginBottom: "5px", color: "green" }}>
                {cartState.cartItems.length > 0
                  ? cartState.cartItems.length
                  : null}
              </span>
            </Link>
          </MenuItem>
          <UserMenu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Orders</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </UserMenu>
        </MenuItems>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNav;
