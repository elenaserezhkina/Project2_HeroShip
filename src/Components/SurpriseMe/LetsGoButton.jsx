import React from "react";
import "./LetsGoButton.scss";

// Material UI
import Button from "@material-ui/core/Button";

export default function SurpriseMeButton() {
  return (
    <div className="letsGoButtonContainer">
      <Button variant="contained" color="secondary">
        Let's go!
      </Button>
    </div>
  );
}
