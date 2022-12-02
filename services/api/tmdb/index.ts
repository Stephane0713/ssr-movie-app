import { Movie, SearchMoviesResult } from "models";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env["NEXT_PUBLIC_API_KEY"];

export async function fetchMovies(search: string): Promise<SearchMoviesResult> {
  return fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&language=fr-FR&query=${search}&page=1&include_adult=false`
  ).then(async (res) => await res.json()) as Promise<SearchMoviesResult>;
}

export async function fetchMovie(id: number): Promise<Movie> {
  return fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=fr-FR`).then(
    async (res) => await res.json()
  ) as Promise<Movie>;
}
