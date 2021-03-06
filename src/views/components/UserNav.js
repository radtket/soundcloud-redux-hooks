import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { User } from "../../store/users/user";
import StyledUserNav from "../styles/UserNav";
import FormattedInteger from "./Formatters/FormattedInteger";

const UserNav = ({
  user: {
    id,
    trackCount,
    likesCount,
    followersCount,
    followingsCount,
    playlistCount,
  },
}) => {
  return (
    <StyledUserNav className="page-header">
      <nav className="user-navigation">
        <div className="container">
          <ul className="nav">
            <li>
              <NavLink to={`/users/${id}/tracks`}>
                Tracks <FormattedInteger value={trackCount} />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users/${id}/favorites`}>
                Likes <FormattedInteger value={likesCount} />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users/${id}/followers`}>
                Followers <FormattedInteger value={followersCount} />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users/${id}/followings`}>
                Following
                <FormattedInteger value={followingsCount} />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users/${id}/playlists`}>
                Playlists
                <FormattedInteger value={playlistCount} />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </StyledUserNav>
  );
};

UserNav.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};

export default UserNav;
