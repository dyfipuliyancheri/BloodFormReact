import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./gx-loading.json";

const LoadingAnimation = ({success}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="empty-container mx-auto mt-5">
      <Lottie options={defaultOptions} height="200px" width="200px" />
      {success ? (
        <h3 className="text-center">Thank You Your Data Is Successfully Uploaded</h3>
      ) : (
        <h3 className="text-center">Loading...</h3>
      )}
    </div>
  );
};

export default LoadingAnimation;
