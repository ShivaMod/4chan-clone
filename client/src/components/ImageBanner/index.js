import React from "react";

import "../../assets/css/BoardThreads.css";

const randomBanner = () => {
  // lazy
  var images = ["1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif"];
  return images[Math.floor(Math.random() * images.length)];
};

const ImageBanner = () => {
  return (
    <div className="boardBanner">
      <img
        src={require(`../../assets/img/banners/${randomBanner()}`)}
        alt="img"
      />
    </div>
  );
};

export default ImageBanner;
