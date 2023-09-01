import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
const SlideShow = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen relative">
        <img
          src="/img/codepic.jpeg"
          alt=""
          className="w-full h-full object-cover blur"
        />

        <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
          <Slide triggerOnce>
            <h1 className="text-8xl font-bold text-white">Calvin Wong</h1>
          </Slide>
          <Fade delay={1e-3} cascade damping={1e-3}>
            <p className="text-2xl text-white">Software Engineer</p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
