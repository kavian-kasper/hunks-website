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
  "/slider-img/silverFox.png",
  "/slider-img/sleazy.png",
  "/slider-img/cyber.png",
  "/slider-img/poet.png",
  "/slider-img/cultured.png",
  "/slider-img/jealous.png",
  "/slider-img/player.png",
  "/slider-img/street.png",
  "/slider-img/classic.png",
  "/slider-img/edge.png",
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
            <span>New Wave Hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[6]})` }}
          >
            <span>Belle de Jour Hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[17]})` }}
          >
            <span>Street Hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[12]})` }}
          >
            <span>Cyberhunk</span>
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
            style={{ backgroundImage: `url(${slideImages[3]})` }}
          >
            <span>Loco Hunk</span>
          </div>
        </div>

        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          >
            <span>Goth Hunk</span>
          </div>
        </div>

        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[9]})` }}
          >
            <span>Hacker Hunk</span>
          </div>
        </div>

        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[8]})` }}
          >
            <span>Pastel Hunk</span>
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
            style={{ backgroundImage: `url(${slideImages[10]})` }}
          >
            <span>Silver Fox Hunk</span>
          </div>
        </div>
        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[11]})` }}
          >
            <span>Sleazy Hunk</span>
          </div>
        </div>
        {/* <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[13]})` }}
          >
            <span>Poet Hunk</span>
          </div>
        </div> */}

        {/* <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[15]})` }}
          >
            <span>Jealous boyfriend Hunk</span>
          </div>
        </div> */}
        {/* <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[16]})` }}
          >
            <span>Player Hunk</span>
          </div>
        </div> */}

        <div className="each-slide pixelated">
          <div
            className="mx-auto w-312 md:w-598"
            style={{ backgroundImage: `url(${slideImages[5]})` }}
          >
            <span>Daft Hunk</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
