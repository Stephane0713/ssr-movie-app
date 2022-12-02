import { Typography } from "@mui/material";
import SearchBar from "components/SearchBar";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies - My movies app</title>
      </Head>
      <Typography component="h1" variant="h4" mb={1}>
        My movies app
      </Typography>
      <SearchBar />
    </>
  );
}
