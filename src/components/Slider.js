import React, { useState } from "react";

import RightArrow from "../assets/feather/chevron-right.svg";
import LeftArrow from "../assets/feather/chevron-left.svg";
// import Pause from "../assets/feather/pause-circle.svg";
// import Play from "../assets/feather/play-circle.svg";

const Slider = props => {
  // Constants
  const [slideCounter, setSlideCounter] = useState(0);
  // const [sliderState, setSliderState] = useState(true);
  const product = props.product;
  // TODO: make slider automatic play
  // Effects
  // useEffect(() => {
  //   if (sliderState === true) {
  //     var sliderInterval = setInterval(() => {
  //       next();
  //     }, 1000);
  //     return () => clearInterval(sliderInterval);
  //   } else {
  //     clearInterval(sliderInterval);
  //   }
  // }, [sliderState]);
  // Handlers
  const next = () => {
    if (slideCounter < (product && product.images.length - 1)) {
      console.log("here");
      setSlideCounter(slideCounter + 1);
    } else setSlideCounter(0);
  };
  const before = () => {
    if (slideCounter > 0) setSlideCounter(slideCounter - 1);
    else setSlideCounter(product && product.images.length - 1);
  };
  // const toggle = () => {
  //   setSliderState(!sliderState);
  // };
  // Elements
  const backgroundImage = {
    background: `white url(${product &&
      product.images[slideCounter]}) no-repeat center / cover`
  };
  // const sliderStateIcon = sliderState ? (
  //   <Pause className="slider__controller_icon small" onClick={toggle} />
  // ) : (
  //   <Play className="slider__controller_icon small" onClick={toggle} />
  // );
  return (
    <div className="slider">
      <div className="slider__controller">
        <LeftArrow className="slider__controller_icon" onClick={before} />
        {/* {sliderStateIcon} */}
        <RightArrow className="slider__controller_icon" onClick={next} />
      </div>
      <div className="slider__slide" style={backgroundImage} />
    </div>
  );
};

export default Slider;
