import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Events from "./Events";
import FamilyTree from "./FamilyTree";
import SearchBox from "./SearchBox";

const LeftSection = ({ family, setFamily, setPreview, PreviewNode }) => {
  // const [selectedNode, setSelectedNode] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setFilteredData(family);
  }, [family, setFamily]);

  return (
    <Box
      sx={{
        // padding: "20px",
        // margin: "10px",
        // width: "50%",
        height:'500px',
        display: "flex",
        // minHeight:'500px',
        flexDirection: "column",
        justifyContent: "start",
        borderRadius: "10px",
        gap: "10px",
        // overflow: "auto",
      }}
    >
      <Box
        sx={{
            bgcolor:'#F0FDFA',
          border: "1px solid #14B8A6",
          borderRadius: "10px",
          height: "75.5%",
          // overflow:'auto'
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            borderBottom: "1px solid #14B8A6",
            padding: "5px",
            position: "stick",
          }}
        >
          Family Tree
        </Typography>

        <Box
          sx={{
            padding: "25px 0",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            // overflow: "auto",
          }}
        >
          <SearchBox
            family={family}
            setFamily={setFamily}
            setFilteredData={setFilteredData}
          />

          <FamilyTree family={filteredData} setPreview={setPreview} />
        </Box>
      </Box>
      <Events PreviewNode={PreviewNode} family={family} setFamily={setFamily} />
    </Box>
  );
};

export default LeftSection;
