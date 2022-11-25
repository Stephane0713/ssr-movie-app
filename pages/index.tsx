import SearchBar from "components/SearchBar";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies - My movies app</title>
      </Head>
      <h1>My movies app</h1>
      <SearchBar />
    </>
  );
}
