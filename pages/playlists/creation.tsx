import { Button } from "@mui/material";
import Playlist from "components/Playlist";
import { Movie } from "models";
import React from "react";
import { getMoviesFromPlaylist } from "services/storage";

const PlaylistCreationPage = () => {
  const [movies, setMovies] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    setMovies(getMoviesFromPlaylist());
  }, []);

  return (
    <>
      <Button
        onClick={async () => {
          const savedPlaylist = await fetch(
            "http://localhost:3000/api/playlists",
            { method: "POST", body: JSON.stringify({ movies: movies }) }
          );
          console.log(savedPlaylist);
        }}
      >
        Sauvegarder
      </Button>
      <Playlist movies={movies} />;
    </>
  );
};

export default PlaylistCreationPage;
