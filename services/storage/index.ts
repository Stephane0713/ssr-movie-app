import { Movie } from "models";

export const addMovieIdToPlaylist = (movie: Movie): void => {
  const movies = getMoviesFromPlaylist();

  if (movies.find((m) => movie.id === m.id)) return;

  const json = JSON.stringify([...movies, movie]);
  window.localStorage.setItem("playlist", json);
};

export const getMoviesFromPlaylist = (): Movie[] => {
  const json = window.localStorage.getItem("playlist");
  return json ? JSON.parse(json) : [];
};
