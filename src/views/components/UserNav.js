import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { User } from "../../store/users/user";
import StyledUserNav from "../styles/UserNav";
import FormattedInteger from "./FormattedInteger";

const UserNav = ({
  user: { id, trackCount, likesCount, followersCount, followingsCount },
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
              <NavLink to={`/users/${id}/likes`}>
                Likes <FormattedInteger value={likesCount} />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users/${id}/followers`}>
                Followers <FormattedInteger value={followersCount} />
              </NavLink>
            </li>
            <li>
              <NavLink to={`/users/${id}/following`}>
                Following
                <FormattedInteger value={followingsCount} />
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
