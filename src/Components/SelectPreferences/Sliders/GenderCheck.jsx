import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function GenderCheck({ value, handleChange }) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={value.female}
            onChange={handleChange}
            value="female"
          />
        }
        label="F"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={value.male}
            onChange={handleChange}
            value="male"
            color="primary"
          />
        }
        label="M"
      />
    </FormGroup>
  );
}

export default GenderCheck;
