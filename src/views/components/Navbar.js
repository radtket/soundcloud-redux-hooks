import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { NavLink, Link, useLocation } from "react-router-dom";
import { StyledNavbar, StyledMobileAppBar } from "../styles/Navbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserAccountButton from "./UserAccountButton";
import { getSession } from "../../store/session/selectors";
import {
  IconHome,
  IconHomeOutline,
  IconSearch,
  IconDiscover,
  IconSoundCloudAuth,
} from "./Icons";

const Navbar = forwardRef(({ mobile }, ref) => {
  const { id } = useSelector(getSession);
  const { pathname } = useLocation();
  const isHomeActive = pathname === "/";

  if (mobile) {
    return (
      <StyledMobileAppBar {...{ ref }}>
        <div>
          <NavLink to="/">
            {isHomeActive ? <IconHome /> : <IconHomeOutline />}
            <span>Home</span>
          </NavLink>
          <Link to="/">
            <IconSearch />
            <span>Search</span>
          </Link>
          <NavLink to="/genres">
            <IconDiscover />
            <span>Discover</span>
          </NavLink>
          {id ? (
            <UserAccountButton />
          ) : (
            <Link to="/">
              <IconSoundCloudAuth />
              <span>Login</span>
            </Link>
          )}
        </div>
      </StyledMobileAppBar>
    );
  }

  return (
    <StyledNavbar {...{ ref }}>
      <div className="nav-container">
        <nav className="nav-primary">
          <Link className="nav-logo" to="/">
            <Logo />
          </Link>
          <NavLink className="nav-item" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/genres">
            Genres
          </NavLink>
        </nav>

        {id && (
          <nav className="nav-secondary">
            <NavLink to="/me/stream">Stream</NavLink>
            <NavLink to="/me/likes">Likes</NavLink>
            <NavLink to="/me/followings">Following</NavLink>
          </nav>
        )}

        <nav className="nav-search">
          <SearchBar />
          <UserAccountButton />
        </nav>
      </div>
    </StyledNavbar>
  );
});

Navbar.propTypes = {
  mobile: PropTypes.bool,
};

Navbar.defaultProps = {
  mobile: false,
};

export default Navbar;
