import React from "react";
import PropTypes from "prop-types";
import { StyledUserAccountButton, StyledAuthLink } from "../styles/Buttons";
import { IconUser } from "./Icons";

const UserAccountButton = ({ isAuthenticated, avatarUrl }) => {
  if (!isAuthenticated) {
    return (
      <StyledAuthLink to="/redirect">
        <IconUser /> <span>Sign In</span>
      </StyledAuthLink>
    );
  }

  return (
    <StyledUserAccountButton {...{ avatarUrl }}>
      <span className="visuallyhidden">User Account</span>
    </StyledUserAccountButton>
  );
};

UserAccountButton.propTypes = {
  isAuthenticated: PropTypes.bool,
  avatarUrl: PropTypes.string,
};

UserAccountButton.defaultProps = {
  isAuthenticated: false,
  avatarUrl: null,
};

export default UserAccountButton;
