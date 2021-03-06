import React from "react";
import Star from "components/Star";
import Button from "components/Button";
import TestimoniAccent from "assets/images/testimonial-landingpages-frame.jpg";
import Fade from "react-reveal/Fade";

export default function Testimoni({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="testimonial"
                style={{ zIndex: 1, borderRadius: `15px 15px 100px 15px` }}
                className="position-absolute"
              />
              <img
                src={TestimoniAccent}
                alt="testimonial frame"
                style={{ margin: `-30px 0 0 -30px` }}
                className="position-absolute"
              />
            </div>
          </div>
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                type="link"
                isPrimary
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
