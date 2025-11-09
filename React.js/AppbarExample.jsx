import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AppBarExample() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App Header</Typography>
      </Toolbar>
    </AppBar>
  );
}
