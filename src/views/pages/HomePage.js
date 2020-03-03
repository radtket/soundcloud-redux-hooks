import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TrackGrid from "../components/TrackGrid";
import Hero from "../components/Hero";
import { API_USERS_URL, FEATURED_TRACKLIST_ID } from "../../store/constants";
import { loadUserTracks } from "../../store/users/actions";
import GenresGrid from "../components/GenresGrid";
import getBrowserMedia from "../../store/browser/selectors";
import MobileSectionTitle from "../components/MobileSectionTitle";
import { SmallSection } from "../styles/General";

const HomePage = () => {
  const dispatch = useDispatch();
  const { large } = useSelector(getBrowserMedia);

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
      {large && <Hero />}
      <section className="container">
        {!large && <GenresGrid />}

        <SmallSection>
          {!large && <MobileSectionTitle title="Featured Tracks" />}
          <TrackGrid compactLayout />
        </SmallSection>
      </section>
    </>
  );
};

export default HomePage;
