import React from "react";
import PropTypes from "prop-types";

const FormattedVolume = ({ value = 0 }) => {
  let val = value;
  if (!val) {
    val = "0.0";
  } else {
    val /= 10;
    val = val.toPrecision(val >= 1 ? 2 : 1);
  }

  return <span>{val}</span>;
};

FormattedVolume.propTypes = {
  value: PropTypes.number,
};

FormattedVolume.defaultProps = {
  value: 0,
};

export default FormattedVolume;
