import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { StyledFavoriteButton } from "../../styles/Buttons";
import { toggleLikeRequest } from "../../../store/session/actions";
import { IconHeart } from "../Icons";

const FavoriteButton = ({ liked, id, oauthToken }) => {
  const dispatch = useDispatch();

  return (
    <StyledFavoriteButton
      className={liked ? "active" : ""}
      onClick={() => {
        dispatch(toggleLikeRequest({ id, liked, oauthToken }));
      }}
    >
      <IconHeart />
    </StyledFavoriteButton>
  );
};

FavoriteButton.propTypes = {
  liked: PropTypes.bool,
  id: PropTypes.number.isRequired,
  oauthToken: PropTypes.string,
};

FavoriteButton.defaultProps = {
  liked: false,
  oauthToken: null,
};

export default FavoriteButton;
