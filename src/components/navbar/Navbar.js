import React from "react";
import { Box, Stack } from "@mui/material";
import logo from "../../assets/youtube.jpg";
import { Link } from "react-router-dom";
import Search_Header from "../search-header/Search_Header";

const Navbar = () => {
  return (
    <div>
      <Stack
        className="nav__header"
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={2}
        sx={{ position: "sticky" }}
        top={0}
        zIndex={222}
      >
        <Link to="/">
          <img className="logo" src={logo} alt="logo" width={130} height={60} />
        </Link>
        <Search_Header />
        <Box />
      </Stack>
    </div>
  );
};

export default Navbar;
