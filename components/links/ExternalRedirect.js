import { useEffect } from "react";

import { Box, Typography } from "@mui/material";

import Meta from "../Meta";

const ExternalRedirect = (props) => {
  const { url } = props;
  useEffect(() => window.location.replace(url), [url]);

  return (
    <>
      <Meta title="Redirect" description={`Redirecting to ${props.title}`} />
      <Box>
        <Typography variant="h3">Hold on!</Typography>
        <Typography variant="h5">
          You will be redirected to {props.title}
        </Typography>
      </Box>
    </>
  );
};

export default ExternalRedirect;
