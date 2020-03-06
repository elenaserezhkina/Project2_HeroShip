import React, { useEffect, useState } from "react";
import HeartAnimation from "../Components/HeartAnimation/HeartAnimation";
import { Redirect } from "react-router-dom";

function HeartAnimationPage() {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 2000);
  });
  return redirect ? (
    <Redirect to="/final" />
  ) : (
    <div>
      <HeartAnimation />
    </div>
  );
}

export default HeartAnimationPage;
