import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { StyledUserAccountButton, StyledAuthLink } from "../styles/Buttons";
import { IconUser } from "./Icons";
import { login } from "../../store/session/actions";

const UserAccountButton = ({ isAuthenticated, avatarUrl }) => {
  const dispatch = useDispatch();
  if (!isAuthenticated) {
    return (
      <StyledAuthLink onClick={() => dispatch(login())}>
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
