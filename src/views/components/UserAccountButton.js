import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { StyledUserAccountButton, StyledAuthLink } from "../styles/Buttons";
import { IconUser } from "./Icons";
import { login } from "../../store/session/actions";

const UserAccountButton = () => {
  const dispatch = useDispatch();
  const { avatarUrl, username, id } = useSelector(state => {
    return {
      ...state.session,
    };
  });

  if (!id) {
    return (
      <StyledAuthLink onClick={() => dispatch(login())}>
        <IconUser /> <span>Sign In</span>
      </StyledAuthLink>
    );
  }

  return (
    <StyledUserAccountButton {...{ avatarUrl }}>
      <span className="visuallyhidden">{username}</span>
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
