import { FormatQuote, GitHub, LinkedIn } from "@mui/icons-material";
import { Avatar, Card, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import classes from "./InformationCard.module.scss";

const InformationCard = () => {
  return (
    <Box
      id="about-section"
      py={{ xs: 2, sm: 5 }}
      mb={5}
      className={classes.card}
    >
      <Grid container spacing={2} px={{ xs: 2, sm: 5 }}>
        <Grid item xs={12} md={12}>
          <Card>
            <Box px={3} className={classes.infobox}>
              <Box className={classes.heading} py={5}>
                <Box mb={2}>
                  <Avatar
                    sx={{ width: 200, height: 200 }}
                    src="https://avatars.githubusercontent.com/danielschuster-muc"
                    alt="Daniel Schuster"
                  />
                </Box>
                <Typography variant="h5">Daniel Schuster</Typography>
                <Typography variant="subtitle1">Web Developer</Typography>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item>
                    <Link to="/linkedin">
                      <IconButton>
                        <LinkedIn />
                      </IconButton>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/github">
                      <IconButton>
                        <GitHub />
                      </IconButton>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <Box pb={5}>
                <Grid container justifyContent="center" spacing={10}>
                  <Grid item>
                    <Box sx={{ textTransform: "uppercase" }}>
                      <Typography color="gray">Age</Typography>
                      <Typography color="gray">Occupation</Typography>
                      <Typography color="gray">Location</Typography>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography>19</Typography>
                    <Typography>Student</Typography>
                    <Typography>Munich, Germany</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
          <Box py={2}>
            <Card>
              <Box p={3}>
                <Grid container direction="row">
                  <Grid item xs={1}>
                    <FormatQuote />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography>
                      If it makes you happy, it doesn't have to make sense to
                      anybody else.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Box>
        </Grid>

        {/* <Grid item xs={12} md={8}>
          <Card>
            <Box p={3}>
              <Typography variant="h6">About me</Typography>
            </Box>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default InformationCard;
