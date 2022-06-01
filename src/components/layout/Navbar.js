import { Link } from "react-router-dom";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuSharp } from "@mui/icons-material";

const Navbar = (props) => {
  return (
    <Box id="header" component="header">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuSharp />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
