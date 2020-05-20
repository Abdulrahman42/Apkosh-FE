import React from "react";
import imgHero from "assets/images/img-hero.jpg";
import imgHeroFrame from "assets/images/img-hero-frame.jpg";
import travel from "assets/icons/suitcase.svg";
import treasure from "assets/icons/tools-and-utensils.svg";
import maps from "assets/icons/signs.svg";
import Button from "components/Button";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
// import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPick() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
  return (
    <Fade>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Let's Spent Weekend, <br />
              With Your Family.
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We Provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPick}
            >
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col-auto" width={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={travel}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  <CountUp
                    start={0}
                    end={props.data.travelers}
                    duration={2}
                    separator="."
                  />{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" width={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={treasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  <CountUp
                    start={0}
                    end={props.data.treasures}
                    duration={2}
                    separator="."
                  />{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={maps}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  <CountUp
                    start={0}
                    end={props.data.cities}
                    duration={2}
                    separator="."
                  />{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5 img-hero">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={imgHero}
                alt="Image"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={imgHeroFrame}
                alt="Image Frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
