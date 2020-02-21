import React from "react";
import PropTypes from "prop-types";

const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g;

const FormattedInteger = ({ value }) => {
  return (
    <span>
      {value >= 1000 ? String(value).replace(REPLACER_PATTERN, "$1,") : value}
    </span>
  );
};

FormattedInteger.propTypes = {
  value: PropTypes.number.isRequired,
};

export default FormattedInteger;
