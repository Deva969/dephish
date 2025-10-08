import { useEffect, useState } from "react";
import "./Fish.css";

const Fish = () => {
  const [scrollHeight, setScrollHeight] = useState(500);
  const totalFrames = 48;
  const images = [];

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY + 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let loadedCount = 0;
    let frameIndex = 0;

    for (let i = 1; i <= totalFrames; i++) {
      let img = new Image();
      img.src = `/assets/${i}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          startAnimation();
        }
      };
      images.push(img);
    }

    function startAnimation() {
      function animateFish() {
        const fishContainer = document.getElementById("fishcontainer");
        if (fishContainer) {
          fishContainer.style.backgroundImage = `url('${images[frameIndex].src}')`;

          if (frameIndex < totalFrames - 1) {
            frameIndex++;
            setTimeout(animateFish, 50);
          } else {
            frameIndex = 0;
            fishContainer.style.backgroundImage = `url('${images[frameIndex].src}')`;
            setTimeout(animateFish, 1000);
          }
        }
      }
      animateFish();
    }
  }, []);

  return (
    <>
      <div id="fishinghook" style={{ height: `${scrollHeight}px` }}></div>
      <div id="fishcontainer" style={{ top: `${scrollHeight}px` }}></div>
    </>
  );
};

export default Fish;
