import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { GENRES, TIMES } from "../../store/constants";
import StyledGenreNav from "../styles/GenreNav";

const GenreNav = ({ genre, time }) => {
  return (
    <StyledGenreNav>
      <div className="container">
        <ul className="nav">
          {Object.entries(GENRES).map(([key, value]) => {
            return (
              <li {...{ key }}>
                <NavLink
                  className={key === genre ? "active" : ""}
                  to={{
                    pathname: `/genres/${key}`,
                    // state: { g: key, ...(time ? { t: time } : {}) },
                  }}
                >
                  {value}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledGenreNav>
  );
};

GenreNav.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenreNav;
