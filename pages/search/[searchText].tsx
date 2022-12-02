import { SearchResult } from "components/SearchResult";
import { SearchMoviesResult } from "models";
import { GetServerSideProps } from "next";
import { fetchMovies } from "services/api/tmdb";

type Props = { searchResult: SearchMoviesResult };

const SearchText = ({ searchResult }: Props) => {
  return <SearchResult searchResult={searchResult} />;
};

export default SearchText;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchText = context.params?.searchText;

  if (!searchText || Array.isArray(searchText))
    return { props: { notFound: "Movies not found" } };

  const searchResult = await fetchMovies(searchText);

  return { props: { searchResult } };
};
