import React, { act, useEffect, useState } from "react";
const data = [
  "https://www.ulcdn.net/media/Slideshow/Home_Interiors.jpg",
  "https://www.ulcdn.net/media/Slideshow/FHF_PD10_E_tonight_Slideshow.png",
  "https://www.ulcdn.net/media/Slideshow/Dining_u30k_slideshow.png",
];
export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextImageSlider = () => {
    if (activeIndex === data.length - 1) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(activeIndex + 1);
  };
  const prevSliderImage = () => {
    if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
      return;
    }
    setActiveIndex(activeIndex - 1);
  };
  useEffect(() => {
    const time = setTimeout(() => {
      prevSliderImage();
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [activeIndex]);
  return (
    <>
      Slider component
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <button
          style={{ padding: "4px 8px", fontSize: "12px", flexShrink: 0 }}
          onClick={prevSliderImage}
        >
          Pre
        </button>
        {data &&
          data.length > 0 &&
          data.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`slider - ${index + 1}`}
              className="responsive-img"
              style={{
                flex: 1,
                maxWidth: "90%",
                height: "auto",
                display: activeIndex === index ? "block" : "none",
              }}
            />
          ))}

        <button
          style={{ padding: "4px 8px", fontSize: "12px", flexShrink: 0 }}
          onClick={nextImageSlider}
        >
          Next
        </button>
      </div>
    </>
  );
}
