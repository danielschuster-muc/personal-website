import { useState } from "react";

import { Delete, Save } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 1,
    marginBottom: 16,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
};

const TestPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container maxWidth="xd">
      <Typography variant="h2" component="div">
        Test Page
      </Typography>
      <Typography variant="body1">My Testing Page</Typography>
      <ButtonStyled />
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={4} sm={6}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>
        <Grid item xs={4} sm={6}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>
        <Grid item xs={4} sm={12}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>
      </Grid>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => setChecked(e.target.checked)}
              checked={checked}
              icon={<Delete />}
              checkedIcon={<Save />}
              inputProps={{
                "aria-label": "secondary checkbox",
              }}
            />
          }
          label={`Testing Checkbox (${
            checked ? "is checked" : "is not checked"
          })`}
        />
      </div>
      <ButtonGroup variant="contained">
        <Button startIcon={<Save />} color="primary">
          Save
        </Button>
        <Button startIcon={<Delete />} color="secondary">
          Discard
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default TestPage;
