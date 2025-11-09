import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function CardExample() {
  return (
    <Card sx={{ maxWidth: 250, padding: 2 }}>
      <CardContent>
        <Typography variant="h6">React MUI Card</Typography>
        <Typography variant="body2">Simple card content.</Typography>
      </CardContent>
    </Card>
  );
}
