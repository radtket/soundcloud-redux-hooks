import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrackGrid from "../../components/TrackGrid";
import {
  API_SESSION_STREAM_URL,
  SESSION_STREAM_TRACKLIST_ID,
} from "../../../store/constants";
import { loadUserTracks } from "../../../store/users/actions";
import { getOauthToken } from "../../../store/session/selectors";

const StreamPage = () => {
  const dispatch = useDispatch();
  const oauthToken = useSelector(getOauthToken);

  useEffect(() => {
    oauthToken &&
      dispatch(
        loadUserTracks({
          id: SESSION_STREAM_TRACKLIST_ID,
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
