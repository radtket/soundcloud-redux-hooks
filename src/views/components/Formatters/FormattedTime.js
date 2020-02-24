import React from "react";
import PropTypes from "prop-types";

const FormattedTime = ({ value = 0, unit }) => {
  let val = value;
  // HTMLAudioElement provides time in seconds
  // SoundCloud provides time in milliseconds
  if (unit === "ms") {
    val /= 1000; // convert milliseconds to seconds
  }

  const hours = Math.floor(val / 3600);
  const minutes = `0${Math.floor((val % 3600) / 60)}`.slice(-2);
  const seconds = `0${Math.floor(val % 60)}`.slice(-2);

  return (
    <span>
      {hours ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`}
    </span>
  );
};

FormattedTime.propTypes = {
  unit: PropTypes.string,
  value: PropTypes.number,
};

FormattedTime.defaultProps = {
  unit: null,
  value: 0,
};

export default FormattedTime;
