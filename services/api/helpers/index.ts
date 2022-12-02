const getImage = (path: string | undefined) => {
  return path
    ? `https://image.tmdb.org/t/p/w500/${path}`
    : "/images/movie-fallback.png";
};

export { getImage };
