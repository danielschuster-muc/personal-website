import { GitHub, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Grid,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const tableInformation = [
  {
    name: "age",
    value: "19",
  },
  {
    name: "occupation",
    value: "Student",
  },
  {
    name: "location",
    value: "Munich",
  },
];

const About = () => {
  return (
    <Card id="about" sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box>
            <Box
              sx={{
                mb: 2,
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 200, height: 200, mb: 2 }}
                variant="rounded"
                src="https://avatars.githubusercontent.com/danielschuster-muc"
                alt="Daniel Schuster"
              />
              <Typography variant="h5">Daniel Schuster</Typography>
              <Typography variant="subtitle1">Web Developer</Typography>
            </Box>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item>
                <Link href="/linkedin">
                  <IconButton aria-label="LinkedIn">
                    <LinkedIn />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/github">
                  <IconButton aria-label="GitHub">
                    <GitHub />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
            <Box>
              <TableContainer>
                <Table aria-label="quick information table">
                  <TableBody>
                    {tableInformation.map((row) => {
                      return (
                        <TableRow key={row.name}>
                          <TableCell
                            sx={{
                              textTransform: "uppercase",
                              color: "gray",
                              borderBottom: "none",
                            }}
                            component="th"
                            scope="row"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell sx={{ borderBottom: "none" }}>
                            {row.value}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h3">About me</Typography>
            <Typography variant="p">
              Hi, I am Daniel. <br />
              After graduating from high school in July 2021, I participated in
              a web development bootcamp at Le Wagon in Munich from October to
              December.
              <br />
              Afterwards, I did a 6-week software internship at QAware GmbH. In
              March and April I went to Valencia in Spain for a language course
              to improve my Spanish skills. <br />
              Currently I'm working for a startup, for which I took an online
              React.js course. I'm also taking a Cambridge preparation course
              and am helping at the Münchner Tafel before I start studying
              computer science in October.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default About;
