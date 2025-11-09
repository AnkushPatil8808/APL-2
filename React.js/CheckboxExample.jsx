import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function CheckboxExample() {
  const [checked, setChecked] = useState(false);
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />}
      label={checked ? "Checked" : "Unchecked"}
    />
  );
}
