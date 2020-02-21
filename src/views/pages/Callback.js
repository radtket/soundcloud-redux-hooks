import React, { useEffect } from "react";
import LoadingIndicator from "../components/LoadingIndicator";

const Callback = () => {
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    window.setTimeout(opener.SC.connectCallback, 1);
  }, []);

  return <LoadingIndicator />;
};

export default Callback;
