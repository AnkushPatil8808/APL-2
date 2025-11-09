import React, { useState } from "react";
import { Dialog, DialogTitle, Button } from "@mui/material";

export default function DialogExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Hello from MUI Dialog!</DialogTitle>
      </Dialog>
    </>
  );
}
