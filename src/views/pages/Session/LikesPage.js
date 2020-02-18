import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrackGrid from "../../components/TrackGrid";
import {
  SESSION_TRACKLIST_ID,
  API_SESSION_LIKES_URL,
} from "../../../store/constants";
import { loadUserTracks } from "../../../store/users/actions";

const LikesPage = () => {
  const dispatch = useDispatch();

  const oauthToken = useSelector(state => state.session.oauthToken);

  useEffect(() => {
    oauthToken &&
      dispatch(
        loadUserTracks({
          id: SESSION_TRACKLIST_ID,
          resource: "likes",
          url: API_SESSION_LIKES_URL,
          oauthToken,
        })
      );
  }, [dispatch, oauthToken]);

  return (
    <>
      <h1>Likess Page</h1>
      <section className="container">
        <TrackGrid />
      </section>
    </>
  );
};

export default LikesPage;
