import React from "react";
import "./LetsGoButton.scss";

// Material UI
import Button from "@material-ui/core/Button";

export default function SurpriseMeButton({ onClick }) {
  return (
    <div className="letsGoButtonContainer">
      <Button onClick={onClick} variant="contained" color="secondary">
        Let's go!
      </Button>
    </div>
  );
}
