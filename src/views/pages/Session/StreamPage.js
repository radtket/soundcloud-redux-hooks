import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrackGrid from "../../components/TrackGrid";
import {
  API_SESSION_STREAM_URL,
  SESSION_STREAM_TRACKLIST_ID,
} from "../../../store/constants";
import { loadUserTracks } from "../../../store/users/actions";
import { getOauthToken } from "../../../store/session/selectors";
import PageTitle from "../../components/PageTitle";
import backgroundImage from "../../../assets/images/background-1.jpg";

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
      <PageTitle activePage="Stream" {...{ backgroundImage }} />
      <section className="container">
        <TrackGrid compactLayout />
      </section>
    </>
  );
};

export default StreamPage;
