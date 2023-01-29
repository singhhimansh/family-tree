import { Box, Typography } from "@mui/material";
import { width } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useFamilyPreviewDetails } from "../../hooks/hooks";

export const DisplayData = ({ label, value }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center',color:'#334155' }}>
      <span style={{fontSize:'1rem', fontWeight:'bold', width:'130px' }}>{label}</span>
      {':'}
      <span style={{}}>{value}</span>
    </div>
  )
};



const FamilyPreview = ({ PreviewNode }) => {

  return (
    <>
      <Box
        sx={{
          bgcolor:'#F0FDFA',
          border: "1px solid #14B8A6",
          height:'500px',
          borderRadius: "10px",
          width: "100%",
          overflow:'auto'
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "black",
            textAlign: 'center',
            fontWeight: "bold",
            borderBottom: "1px solid #14B8A6",
            padding: "5px",
          }}
        >
          Family Details
        </Typography>

        <Box
          sx={{
            flexGrow:1,
            display: 'flex',
            alignItems:"center",
            marginTop:'100px',
            marginLeft:'200px'
            // justifyContent: "center",
            
          }}
        >
          {PreviewNode?.name ? 
          <Box sx={{ display:'flex', gap:'10px', flexDirection: 'column',height:'100%'}}>
            <DisplayData label={'Name'} value={PreviewNode?.name} />
            <DisplayData label={'Spouse'} value={PreviewNode?.spouse} />
            <DisplayData label={'Location'} value={PreviewNode?.location} />
            <DisplayData label={'Birth Year'} value={PreviewNode?.year} />
            <DisplayData label={'Present Address'} value={PreviewNode?.address} />
          </Box> : <Typography color={'GrayText'} sx={{fontSize:'1rem'}}>Nothing to preview. Select a family Node.</Typography>
          }
        </Box>
      </Box>
    </>
  );
};

export default FamilyPreview;
