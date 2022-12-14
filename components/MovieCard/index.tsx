import { Card, CardContent, Rating, Typography } from "@mui/material";

import React from "react";
import classes from "./movie-card.module.css";
import { Movie } from "models";
import Image from "next/image";
import { getImage } from "services/api/helpers";

type Props = { movie: Movie };

const MovieCard = ({ movie }: Props) => {
  const imgSrc = getImage(movie.poster_path);

  return (
    <>
      <Card className={classes.root}>
        <Image
          src={imgSrc}
          alt={`Poster du film ${movie.title}`}
          width={300}
          height={400}
        />
        <CardContent>
          <Rating
            defaultValue={movie.vote_average}
            precision={0.25}
            max={10}
            size="large"
            readOnly
          />
          <Typography gutterBottom variant="h5" component="div" mt={3}>
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.overview}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={3}>
            Date de sortie : {movie.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Titre original : {movie.original_title} - VO :{" "}
            {movie.original_language}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Popularité : {movie.popularity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Évaluation : {movie.vote_average}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Votes : {movie.vote_count}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export { MovieCard };
