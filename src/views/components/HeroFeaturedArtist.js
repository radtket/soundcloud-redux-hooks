import React from "react";
import { Link } from "react-router-dom";
import { StyledHeroFeaturedArtist } from "../styles/Hero";

const HeroFeaturedArtist = ({ artist, to }) => {
  return (
    <StyledHeroFeaturedArtist>
      <div className="container">
        <Link className="text" {...{ to }}>
          <h1>{artist}</h1>
          <span>View Artist</span>
        </Link>
      </div>
    </StyledHeroFeaturedArtist>
  );
};

export default HeroFeaturedArtist;
