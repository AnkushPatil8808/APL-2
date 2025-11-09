import React from "react";
import { Grid, Paper } from "@mui/material";

export default function GridExample() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}><Paper sx={{ padding: 2 }}>Left</Paper></Grid>
      <Grid item xs={6}><Paper sx={{ padding: 2 }}>Right</Paper></Grid>
    </Grid>
  );
}
