import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ThemeSelector = (props) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="change-theme-select-label">Theme</InputLabel>
      <Select
        labelId="change-theme-select-label"
        id="change-theme-select"
        label="Theme"
        onChange={props.handleSelectTheme}
        value={props.mode}
      >
        <MenuItem value="light">Light Mode</MenuItem>
        <MenuItem value="dark">Dark Mode</MenuItem>
        <MenuItem value="system">System Preferences</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSelector;
