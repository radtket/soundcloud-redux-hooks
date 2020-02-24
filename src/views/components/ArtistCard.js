import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import StyledArtistCard from "../styles/ArtistCard";
import { User } from "../../store/users/user";
import { IconHeart } from "./Icons";
import FormattedInteger from "./Formatters/FormattedInteger";

const ArtistCard = ({
  user: { avatarUrl, followersCount, username, fullName, id },
}) => {
  return (
    <StyledArtistCard to={`/users/${id}/tracks`}>
      <Link to={`/users/${id}/tracks`}>
        <figure>
          <img alt={fullName || username} src={avatarUrl} />
        </figure>
      </Link>

      <figcaption className="ellipsis-one-line">
        <Link className="ellipsis-one-line" to={`/users/${id}/tracks`}>
          {username}
        </Link>

        <button className="author ellipsis-one-line" type="button">
          <IconHeart />
          <FormattedInteger value={followersCount} />
        </button>
      </figcaption>
    </StyledArtistCard>
  );
};

ArtistCard.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};

export default ArtistCard;
