import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useTheme } from "next-themes";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const onChangeSelection = (event) => {
    const theme = event.target.value;
    const allowedThemes = ["dark", "light", "system"];
    if (allowedThemes.includes(theme)) setTheme(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="change-theme-select-label">Theme</InputLabel>
      <Select
        labelId="change-theme-select-label"
        id="change-theme-select"
        label="Theme"
        onChange={onChangeSelection}
        value={theme}
        defaultValue="system"
      >
        <MenuItem value="light">Light Mode</MenuItem>
        <MenuItem value="dark">Dark Mode</MenuItem>
        <MenuItem value="system">System Preferences</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThemeSelector;
