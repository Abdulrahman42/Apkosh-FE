import React from "react";
import Fade from "react-reveal";
import propTypes from "prop-types";
import "./index.scss";
export default function Numbering({ data, style, current, className }) {
  console.log(current);
  const keyOfData = Object.keys(data);
  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {keyOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === keyOfData.length) {
            isActive = "";
            return null;
          }
          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {index + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
