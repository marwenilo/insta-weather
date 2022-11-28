import React, { useEffect, useRef, useState } from "react";

import { useAppDispatch } from "hooks";
import { fetchCityData } from "store/slices/weatherSlice";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchCity, setSearchCity] = useState("Tunis");

  const searchRef = useRef<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!searchCity) {
      return;
    }

    dispatch(fetchCityData(searchCity));

    searchRef.current = searchCity;
  }, [dispatch, searchCity]);

  const handelChange = (e: any) => {
    const value = e.target.value.trim();
    setSearchInput(value);
  };

  const handelSearch = (e: any) => {
    if (searchInput && searchInput !== searchRef.current) {
      setSearchCity(searchInput);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Search City"
          id="searchCity"
          value={searchInput}
          onChange={handelChange}
        />
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          onClick={handelSearch}
        >
          Search
        </Button>
      </Stack>
    </>
  );
};
export default Search;
