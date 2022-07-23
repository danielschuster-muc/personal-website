import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  const skills = [
    {
      title: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      link: "https://www.javascript.com/",
    },
    {
      title: "Ruby",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
      link: "https://www.ruby-lang.org/en/",
    },
    {
      title: "Ruby on Rails",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-plain.svg",
      link: "https://rubyonrails.org/",
    },
    {
      title: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      link: "https://reactjs.org/",
    },
    {
      title: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg",
      link: "https://nextjs.org/",
    },
    {
      title: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      link: "https://www.postgresql.org/",
    },
    {
      title: "HTML",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      link: "https://www.w3.org/html/",
    },
    {
      title: "CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      link: "https://www.w3.org/Style/CSS/",
    },
    {
      title: "Sass",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      link: "https://sass-lang.com/",
    },
    {
      title: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      link: "https://github.com/",
    },
    {
      title: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      link: "https://git-scm.com/",
    },
    {
      title: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      link: "https://www.java.com/",
    },
    {
      title: "Bootstrap",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      link: "https://getbootstrap.com/",
    },
    {
      title: "Material-UI",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
      link: "https://mui.com/",
    },
  ];

  return (
    <Box id="skills" sx={{ mt: 7, mb: 3 }}>
      <Typography variant="h3">Skills and Technologies</Typography>
      <Grid
        container
        spacing={2}
        sx={{ mt: 1 }}
        display="flex"
        justifyItems="center"
        alignItems="stretch"
      >
        {skills.map((skill) => {
          return (
            <Grid
              item
              key={skill.title}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              sx={{
                p: 5,
              }}
            >
              <Card>
                <CardMedia>
                  <Image
                    src={skill.icon}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    alt={skill.title}
                  />
                </CardMedia>
                <CardHeader subheader={skill.title} />
                <CardActions>
                  <Link href={skill.link}>
                    <Button size="small">Learn more</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Skills;
