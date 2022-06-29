import Link from "next/link";

import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";

const DrawerComponent = (props) => {
  return (
    <Drawer open={props.isOpen} variant="persistent" anchor="right">
      <IconButton
        color="inherit"
        aria-label="close drawer"
        edge="end"
        onClick={props.toggleDrawer}
      >
        <ChevronRight />
      </IconButton>
      <List>
        {props.navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={props.toggleDrawer}
            >
              <Link href={item.link}>
                <ListItemText primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
export default DrawerComponent;
