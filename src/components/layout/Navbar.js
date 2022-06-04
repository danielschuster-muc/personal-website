import { Link } from "react-router-dom";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";

const Navbar = (props) => {
  return (
    <Box id="header" component="header">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mx: 2 }}>
            <Link to="/">Daniel Schuster</Link>
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuSharp />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
