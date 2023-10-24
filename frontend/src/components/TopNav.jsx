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
import { logoutUser } from "../actions/userAction";

const StyledAppBar = styled(AppBar)({
  height: "50px",
  color: "darkslategray",
  backgroundColor: "#FFC107",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  fontWeight: "bold",
});
const MenuItems = styled("div")({
  marginBottom: "5px",
  marginRight: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

const TopNav = () => {
  const dispatch = useDispatch();
  let isLoggedIn = false;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = useSelector((state) => state.loginUserReducer);
  const cartState = useSelector((state) => state.cartReducer);

  if (user.currentUser) {
    isLoggedIn = true;
  }
  return (
    <StyledAppBar position="static" sx={{ zIndex: 1000 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          src="https://i.ibb.co/qyPkYfV/favicon-ico.png"
          style={{ maxWidth: "40px", marginTop: "-9px" }}
        />
        <Typography variant="h6" sx={{ mb: 1, ml: 1 }}>
          Savvy Slice!
        </Typography>
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
          {isLoggedIn ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ mr: 2 }}
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
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/orders"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Orders
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : null}
        </MenuItems>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNav;
