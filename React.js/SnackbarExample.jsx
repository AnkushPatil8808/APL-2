import React, { useState } from "react";
import { Snackbar, Button } from "@mui/material";

export default function SnackbarExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Message</Button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Hello! Snackbar displayed."
      />
    </>
  );
}
