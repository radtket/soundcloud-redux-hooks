import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TrackGrid from "../components/TrackGrid";
import Hero from "../components/Hero";
import {
  API_USERS_URL,
  FEATURED_FOLLOWINGLIST_ID,
} from "../../store/constants";
import { loadUserTracks } from "../../store/users/actions";
import { loadUserFollowings } from "../../store/followings/actions";
import FollowingsGrid from "../components/FollowingsGrid";

const FollowingsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadUserFollowings({
        id: FEATURED_FOLLOWINGLIST_ID,
        url: `${API_USERS_URL}/${FEATURED_FOLLOWINGLIST_ID}`,
      })
    );
  }, [dispatch]);

  return (
    <>
      <Hero />
      <section className="container">
        <FollowingsGrid />
      </section>
    </>
  );
};

export default FollowingsPage;
