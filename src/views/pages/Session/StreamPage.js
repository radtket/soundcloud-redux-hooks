import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSessionTracks } from "../../../store/session/actions";
import TrackGrid from "../../components/TrackGrid";

const StreamPage = () => {
  const dispatch = useDispatch();

  const oauthToken = useSelector(state => state.session.oauthToken);

  useEffect(() => {
    oauthToken && dispatch(loadSessionTracks({ oauthToken }));
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
