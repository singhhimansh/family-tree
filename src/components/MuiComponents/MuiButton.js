import { Box, Button, ButtonBase } from "@mui/material";

export const MuiButton = ({ label, onClick }) => {
    return (
      <Button
        sx={{
          color:'#64748B',
          width: "120px",
          bgcolor:'white',
          "&:hover":{
            bgcolor:'rgb(228, 165, 11,0.5)',
            color:'#475569'
          },
          border: "1px solid #D1D5DB",
          margin: "4px",
          padding: "4px",
          fontSize: "0.8rem",
          textTransform: "capitalize",
        }}
        variant="contained"
        onClick={onClick}
      >
        {label}
      </Button>
    );
  };