import * as React from "react";
import Lottie from "react-lottie";
import * as HeartLoading from "./HeartLoading.json";
import "./HeartAnimation.scss";

export default class HeartLoadingAnimation extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: HeartLoading.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fffafa"
        }}
        className="heart-loading-container"
      >
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}
