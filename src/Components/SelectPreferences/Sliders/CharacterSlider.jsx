import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import "./CharacterSlider.scss";

function CharacterSlider() {
  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="good"
          control={<Radio color="primary" className="white" />}
          label="Good"
          labelPlacement="end"
        />
        <FormControlLabel
          value="bad"
          control={<Radio color="primary" className="white" />}
          label="Bad"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default CharacterSlider;
