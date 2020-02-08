import React from "react";
import PropTypes from "prop-types";
import { StyledIconButton } from "../styles/Buttons";

const IconButton = ({ children, size, ...props }) => {
  return (
    <StyledIconButton {...{ ...props, size }} type="button">
      {children}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};

IconButton.defaultProps = {
  size: null,
};

export default IconButton;
