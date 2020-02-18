import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrackGrid from "../../components/TrackGrid";
import {
  SESSION_TRACKLIST_ID,
  API_SESSION_STREAM_URL,
} from "../../../store/constants";
import { loadUserTracks } from "../../../store/users/actions";

const StreamPage = () => {
  const dispatch = useDispatch();

  const oauthToken = useSelector(state => state.session.oauthToken);

  useEffect(() => {
    oauthToken &&
      dispatch(
        loadUserTracks({
          id: SESSION_TRACKLIST_ID,
          resource: "stream",
          url: API_SESSION_STREAM_URL,
          oauthToken,
        })
      );
  }, [dispatch, oauthToken]);

  return (
    <>
      <h1>Stream Page</h1>
      <section className="container">
        <TrackGrid />
      </section>
    </>
  );
};

export default StreamPage;
