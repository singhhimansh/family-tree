import { Alert, Snackbar } from "@mui/material";

import React from "react";

function MuiSnackbar({ message, severity, open, setOpen }) {
  return (
    <Snackbar
      sx={{ width: "40%" }}
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={4000}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default MuiSnackbar;
