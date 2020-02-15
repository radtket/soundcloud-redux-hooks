import React, { useEffect } from "react";

const Callback = () => {
  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    window.setTimeout(opener.SC.connectCallback, 1);
  }, []);

  return (
    <div>
      <p>This page should close soon.</p>
    </div>
  );
};

export default Callback;
