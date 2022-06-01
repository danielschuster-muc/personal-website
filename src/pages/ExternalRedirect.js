import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const ExternalRedirect = (props) => {
  const { link } = props;
  useEffect(() => window.location.replace(link), [link]);

  return <CircularProgress className="centered" color="secondary" />;
};

export default ExternalRedirect;
