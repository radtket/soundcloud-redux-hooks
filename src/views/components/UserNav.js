import React from "react";
import { Link } from "react-router-dom";
import StyledUserNav from "../styles/UserNav";

const UserNav = () => {
  return (
    <StyledUserNav className="page-header">
      <nav className="user-navigation">
        <div className="container">
          <ul className="nav">
            <li>
              <Link to="/stations">
                Stations<small>13</small>
              </Link>
            </li>
            <li>
              <Link to="/playlists">
                Playlists<small>1</small>
              </Link>
            </li>
            <li>
              <Link to="/likes">
                Likes<small>22</small>
              </Link>
            </li>
            <li>
              <Link to="/followers">
                Followers<small>23</small>
              </Link>
            </li>
            <li>
              <Link to="/following">
                Following<small>3</small>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledUserNav>
  );
};

export default UserNav;
