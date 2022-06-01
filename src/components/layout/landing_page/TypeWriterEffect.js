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
              .pauseFor(1000)
              .typeString("Hello World!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("My Name is Daniel.")
              .pauseFor(2500)
              .start();
          }}
        />
      </Typography>
      <Scroll to="landing-page-information-text" smooth={true}>
        <IconButton>
          <ExpandMoreIcon variant="h3" color="primary" />
        </IconButton>
      </Scroll>
    </div>
  );
};

export default TypeWriterEffect;
