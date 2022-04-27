import "react-slideshow-image/dist/styles.css";

import { Slide } from "react-slideshow-image";

const slideImages = [
  "/slider-img/andro.png",
  "/slider-img/synth.png",
  "/slider-img/goth.png",
  "/slider-img/outlaw.png",
  "/slider-img/buff.png",
  "/slider-img/daft.png",
  "/slider-img/tiffany.png",
  "/slider-img/broker.png",
  "/slider-img/pastel.png",
  "/slider-img/hacker.png",
];

const Slideshow = () => {
  return (
    <div className="text-xl">
      <Slide
        easing="linear"
        autoplay="false"
        duration="7200000"
        transitionDuration="300"
      >
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          >
            <span>New Wave hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[6]})` }}
          >
            <span>Belle de Jour hunk</span>
          </div>
        </div>

        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[3]})` }}
          >
            <span>Bandido hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[4]})` }}
          >
            <span>Buff hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          >
            <span>Gothic poet hunk</span>
          </div>
        </div>

        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[9]})` }}
          >
            <span>Hacker hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[8]})` }}
          >
            <span>Pastel hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          >
            <span>Androgyneous hunk</span>
          </div>
        </div>

        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[5]})` }}
          >
            <span>Daft hunk</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
