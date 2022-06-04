import { IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/KeyboardArrowDown";

import { Link as Scroll } from "react-scroll";
import TypewriterComponent from "typewriter-effect";

const TypeWriterEffect = () => {
  return (
    <div className="centered-horizontal">
      <Typography variant="h2" component="h2" color="primary">
        <TypewriterComponent
          options={{
            loop: true,
            delay: 75,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString("Hello World!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("My name is Daniel.")
              .pauseFor(5000)
              .start();
          }}
        />
      </Typography>
      <Scroll to="about-section" smooth={true}>
        <IconButton size="large">
          <ExpandMoreIcon color="primary" fontSize="large" />
        </IconButton>
      </Scroll>
    </div>
  );
};

export default TypeWriterEffect;
