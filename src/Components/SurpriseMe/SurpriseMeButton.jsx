import React from "react";
import "./SurpriseMeButton.scss";

// Material UI
import Button from "@material-ui/core/Button";

export default function SurpriseMeButton() {
  return (
    <div className="surpriseMeButtonContainer">
      <Button variant="contained" color="secondary">
        Surprise me
      </Button>
    </div>
  );
}
