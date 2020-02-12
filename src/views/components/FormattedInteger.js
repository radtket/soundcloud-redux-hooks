import React from "react";
import PropTypes from "prop-types";

const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g;

const FormattedInteger = ({ value }) => {
  let val = value;
  if (value >= 1000) val = String(value).replace(REPLACER_PATTERN, "$1,");
  return <span>{val}</span>;
};

FormattedInteger.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FormattedInteger;
