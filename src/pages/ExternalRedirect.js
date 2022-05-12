import React, { useEffect } from "react";

import LoadingSpinner from "../components/ui/LoadingSpinner";

const ExternalRedirect = (props) => {
  const { link } = props;
  useEffect(() => window.location.replace(link), [link]);

  return (
    <div>
      <LoadingSpinner centered />
      <p className="centered">Redirecting to {link}</p>
    </div>
  );
};

export default ExternalRedirect;
