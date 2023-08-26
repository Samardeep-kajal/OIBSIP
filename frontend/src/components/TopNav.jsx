import React from "react";
import { AppBar, MenuItem, Toolbar, Typography, styled } from "@mui/material";

const StyledAppBar = styled(AppBar)({
  color: "darkslategray",
  backgroundColor: "#FFC107",
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
          style={{ maxWidth: "50px", marginRight: "10px" }}
        />
        <Typography variant="h6">Savvy Slice!</Typography>
        <MenuItems>
          <MenuItem>
            <Typography textAlign="center">Home</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">Explore</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">Contact Us</Typography>
          </MenuItem>
        </MenuItems>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNav;
