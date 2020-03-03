import React from "react";
import { Box } from "reflexbox";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { GENRES } from "../../store/constants";
import { GenreCard } from "../styles/GenresGrid";
import MobileSectionTitle from "./MobileSectionTitle";
import { SmallSection } from "../styles/General";

// images
const images = require.context("../../assets/images/genres", true);

const GenresGrid = () => {
  return (
    <SmallSection>
      <MobileSectionTitle
        subtitle="Explore by genre and mood"
        title="Browse"
        to="/genres"
      />
      <Swiper
        {...{
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        }}
      >
        {Object.entries(GENRES).map(([key, value]) => (
          <Box width={2 / 3} {...{ key }}>
            <GenreCard
              style={{
                backgroundImage: `url(${images(`./${key}.jpg`)})`,
              }}
              to={`/genres/${key}`}
            >
              <div className="blur" />
              <h4 className="genre-title">{value}</h4>
            </GenreCard>
          </Box>
        ))}
      </Swiper>
    </SmallSection>
  );
};

export default GenresGrid;
