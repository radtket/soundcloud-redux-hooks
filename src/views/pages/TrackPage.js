import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import { getTrackById } from "../../store/tracks/selectors";
import { loadSingleTrack } from "../../store/tracks/actions";

const TrackPage = () => {
  const { trackId } = useParams();
  const dispatch = useDispatch();
  const track = useSelector(state => getTrackById(state, trackId));

  useEffect(() => {
    dispatch(loadSingleTrack(trackId));
  }, [dispatch, trackId]);

  if (!track) {
    return null;
  }

  return (
    <div>
      <h1>Track Page</h1>
    </div>
  );
};

export default TrackPage;
