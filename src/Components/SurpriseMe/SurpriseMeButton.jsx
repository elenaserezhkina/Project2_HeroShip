import React from "react";
import "./SurpriseMeButton.scss";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function SurpriseMeButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary">
        Surprise me
      </Button>
    </div>
  );
}
