// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Movie, Playlist, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

type createdPlaylistParams = {
  name?: string;
  description?: string;
  movies: Movie[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Playlist>
) {
  const playlist = JSON.parse(req.body) as createdPlaylistParams;

  const { name, description, movies } = playlist;

  const createdPlaylist = await prisma.playlist.create({
    data: {
      name,
      description,
      movies: {
        connectOrCreate: movies.map(({ id }) => ({
          where: { id },
          create: { id },
        })),
      },
    },
  });

  res.status(200).json(createdPlaylist);
}
