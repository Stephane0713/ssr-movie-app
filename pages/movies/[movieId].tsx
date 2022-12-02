import { Button } from "@mui/material";
import { MovieCard } from "components/MovieCard";
import { Movie } from "models";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { fetchMovie } from "services/api/tmdb";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { addMovieIdToPlaylist } from "services/storage";

type Props = { movie: Movie };

const MovieId = ({ movie }: Props) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`MyMovies - ${movie.title}`}</title>
      </Head>
      <Button
        variant="outlined"
        startIcon={<KeyboardBackspaceIcon />}
        sx={{ marginRight: 2 }}
        onClick={() => {
          router.push("/");
        }}
      >
        Go back
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          addMovieIdToPlaylist(movie);
        }}
      >
        Ajouter à la playlist
      </Button>
      <MovieCard movie={movie} />
    </>
  );
};

export default MovieId;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const movieId = context.params?.movieId;

  if (!movieId || Array.isArray(movieId))
    return { props: { notFound: "Movie not found" } };

  const movie = await fetchMovie(+movieId);

  return { props: { movie }, revalidate: 24 * 60 * 60 };
};
