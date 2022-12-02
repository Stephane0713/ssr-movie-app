import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import SearchBar from "components/SearchBar";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        mb: 2,
        p: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        MyMovies
      </Typography>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Link href="/">Recherche</Link>
        <Link href="/playlists/creation">Playlist</Link>
      </Box>
      <SearchBar />
    </Box>
  );
};

export default Header;
