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

import DrawerComponent from "./DrawerComponent";
import ThemeSelector from "./ThemeSelector";

const navItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/#about" },
  { title: "Projects", link: "/#projects" },
  { title: "Skills", link: "/#skills" },
];

const Navbar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSelectTheme = (event) => {
    props.onSetMode(event.target.value);
  };

  return (
    <AppBar component="nav" position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">Daniel Schuster</Link>
        </Typography>
        <ThemeSelector
          handleSelectTheme={handleSelectTheme}
          mode={props.mode}
        />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item.title} color="inherit">
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
