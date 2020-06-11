import React from "react";
import Fade from "react-reveal";
import CompletedImg from "assets/images/completed.jpg";
export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedImg}
              alt="image Complete"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We Will Inform You Via Email Later Once The Transaction Has been
              Accept
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
