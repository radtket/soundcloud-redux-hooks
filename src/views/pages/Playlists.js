import React, { useEffect, useState } from "react";
import camelize from "camelize";

import { API_USERS_URL } from "../../store/constants";
import { isArrayEmpty } from "../../utils/helpers";

import PlaylistCard from "../components/PlaylistCard";
import StyledPlaylistGrid from "../styles/PlaylistGrid";

const Playlists = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const init = () => {
      fetch(
        `${API_USERS_URL}/2431310/playlists?client_id=d02c42795f3bcac39f84eee0ae384b00`
      )
        .then(res => res.json())
        .then(data =>
          setState(
            camelize(
              data.reduce((all, one) => {
                if (one.streamable && !isArrayEmpty(one.tracks)) {
                  all.push(one);
                }

                return all;
              }, [])
            )
          )
        );
    };

    init();
  }, []);

  if (!state) {
    return null;
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Playlists</h1>
      <section className="container">
        <StyledPlaylistGrid>
          {state.map(playlist => {
            return <PlaylistCard key={playlist.id} {...{ playlist }} />;
          })}
        </StyledPlaylistGrid>
      </section>
    </div>
  );
};

export default Playlists;
