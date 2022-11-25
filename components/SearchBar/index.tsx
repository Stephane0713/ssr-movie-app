import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const SearchBar = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function handleSubmit() {
    inputRef.current && router.push(`/search/${inputRef.current.value}`);
  }

  return (
    <TextField
      id="search"
      size="small"
      inputRef={inputRef}
      InputProps={{ endAdornment: <SearchIcon onClick={handleSubmit} /> }}
      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
    />
  );
};

export default SearchBar;
