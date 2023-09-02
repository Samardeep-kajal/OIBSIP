import React from "react";
import { AppBar, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
  height: "8vh",
  color: "darkslategray",
  backgroundColor: "#FFC107",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
});
const MenuItems = styled("div")({
  marginRight: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
});

const TopNav = () => {
  return (
    <StyledAppBar position="static">
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
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <Typography textAlign="center">Explore</Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Typography textAlign="center">Contact Us</Typography>
            </Link>
          </MenuItem>
        </MenuItems>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNav;
