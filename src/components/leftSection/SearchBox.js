import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import { Input } from "@mui/material";
import { getNestedFamilyNodeByName } from "./../../utils/utils";

const SearchBox = ({ family, setFamily, setFilteredData }) => {
  const [searchedData, setSearchedData] = useState({});

  const handleSearch = (value) => {
    console.log({ family });
    console.log("handle serach running, : ", value);
    if (!value) setFilteredData(family);
    else {
      let searchResult = getNestedFamilyNodeByName(family, value);
      setFilteredData(searchResult);
    }
  };

  return (

    
    <Input
    sx={{m:'4px auto', px:'10px', bgcolor:'#F8FAFC', width:'230px', border:'1px #14B8A6 solid', borderRadius:'5px'}}
      placeholder="Search..."
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      endAdornment={<SearchIcon sx={{ color: "gray" }} />}
    />
  );
};

export default SearchBox;
