import { MovieCard } from "components/MovieCard";
import { Movie } from "models";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { fetchMovie } from "services/api/tmdb";

type Props = { movie: Movie };

const MovieId = ({ movie }: Props) => {
  return (
    <>
      <Head>
        <title>MyMovies - {movie.title}</title>
      </Head>
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

  const movie = await fetchMovie(movieId);

  return { props: { movie }, revalidate: 24 * 60 * 60 };
};
