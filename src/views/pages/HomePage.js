import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import TrackGrid from "../components/TrackGrid";
import { API_USERS_URL, FEATURED_TRACKLIST_ID } from "../../store/constants";
import { loadUserTracks } from "../../store/users/actions";
import GenresGrid from "../components/GenresGrid";
import MobileSectionTitle from "../components/MobileSectionTitle";
import { SmallSection } from "../styles/General";
import HeroFeaturedArtist from "../components/HeroFeaturedArtist";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadUserTracks({
        id: FEATURED_TRACKLIST_ID,
        url: `${API_USERS_URL}/${FEATURED_TRACKLIST_ID}`,
      })
    );
  }, [dispatch]);

  return (
    <>
      <HeroFeaturedArtist artist="RIFFA" to="/users/3027428/tracks" />
      <section className="container">
        <GenresGrid />
        <SmallSection>
          <MobileSectionTitle title="Featured Tracks" />
          <TrackGrid compactLayout />
        </SmallSection>
      </section>
    </>
  );
};

export default HomePage;
