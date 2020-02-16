import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { GENRES, TIMES } from "../../store/constants";
import StyledGenreNav from "../styles/GenreNav";

const GenreNav = ({ genre, time }) => {
  return (
    <StyledGenreNav>
      <div className="container">
        {Object.entries(GENRES).map(([key, value]) => {
          return (
            <NavLink
              className={key === genre ? "active" : ""}
              {...{ key }}
              to={{
                pathname: `/genres/${key}`,
                // state: { g: key, ...(time ? { t: time } : {}) },
              }}
            >
              {value}
            </NavLink>
          );
        })}
      </div>
    </StyledGenreNav>
  );
};

GenreNav.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenreNav;
