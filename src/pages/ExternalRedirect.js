import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

const ExternalRedirect = (props) => {
  const { link } = props;
  useEffect(() => window.location.replace(link), [link]);

  return (
    <div className="centered-horizontal">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default ExternalRedirect;
