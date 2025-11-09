import React, { useState } from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

export default function RadioExample() {
  const [value, setValue] = useState("A");
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
      <FormControlLabel value="A" control={<Radio />} label="Option A" />
      <FormControlLabel value="B" control={<Radio />} label="Option B" />
    </RadioGroup>
  );
}
