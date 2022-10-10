import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({alert,setAlert}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({state:false});
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
    <Snackbar open={alert.state} autoHideDuration={3000} onClose={handleClose}>
    <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
      {alert.message}
    </Alert>
  </Snackbar>
    </Stack>
  );
}
