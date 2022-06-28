import { useState } from "react";

import Link from "next/link";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import DrawerComponent from "./DrawerComponent";

const navItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/#about" },
  { title: "Projects", link: "/#projects" },
  { title: "Skills", link: "/#skills" },
];

const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    console.log("clicked toggle");
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar component="nav" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">Daniel Schuster</Link>
        </Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={props.toggleDarkMode}
          color="inherit"
        >
          {props.isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item.title} sx={{ color: "#fff" }}>
              <Link href={item.link}>{item.title}</Link>
            </Button>
          ))}
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {mobileOpen && (
          <DrawerComponent
            isOpen={mobileOpen}
            toggleDrawer={handleDrawerToggle}
            navItems={navItems}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
