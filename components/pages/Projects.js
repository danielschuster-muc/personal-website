import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Personal Website",
    description: "Website with information about me, my projects and skills.",
    image: "https://avatars.githubusercontent.com/danielschuster-muc",
    link: "https://danielschuster.me",
    source: "https://github.com/danielschuster-muc/personal-website",
  },
  {
    title: "flazy.app",
    description:
      "flazy is a simple and intuitive flat search platform to both search and offer spare rooms and find your perfect flatmates.",
    image: "/images/flazy.png",
    link: "https://flazy.herokuapp.com",
  },
  {
    title: "Upcoming Projects",
    description: "Further projects are planned...",
    image: "/images/question_mark.png",
    link: "",
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ my: 5 }}>
      <Typography variant="h3">My Projects</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }} alignItems="stretch">
        {projects.map((project) => {
          return (
            <Grid item xs={12} md={4} key={project.title}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia>
                  <Image
                    src={project.image}
                    alt={`Image of ${project.title}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {project.link && (
                    <Link href={project.link}>
                      <Button size="small">Link</Button>
                    </Link>
                  )}
                  {project.source && (
                    <Link href={project.source}>
                      <Button size="small">Source</Button>
                    </Link>
                  )}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
