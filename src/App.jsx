import "./App.css";
import LeftSection from "./components/leftSection";
import FamilyPreview from "./components/rightSection/FamilyPreview";
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { familyData } from "./constants/FamilyData";
import { getNestedFamilyNodeByName } from "./utils/utils";


function App() {
  const [family, setFamily] = useState([]);
  const [familyPreviewDetails, setFamilyPreviewDetails] = useState({});

  useEffect(() => {
    setFamily(familyData);
  }, []);
  

  return (
    <Box
      className="App"
      sx={{
        bgcolor:'#F9FAFB',
        // margin:'auto',
        width: "100vw",
        minWidth:'1000px',
        height: "100vh",
        display: "flex",
        minHeight: '500px',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{
        width: '1000px',
        height: '500px',
        display: "flex",
        gap: "10px",
      }}>
        <LeftSection family={family} setFamily={setFamily} PreviewNode={familyPreviewDetails} setPreview={setFamilyPreviewDetails}  />
        <FamilyPreview PreviewNode={familyPreviewDetails} />
      </Box>
    </Box>
  );
}

export default App;
