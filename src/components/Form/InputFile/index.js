import React, { useRef } from "react";
import propTypes from "prop-types";
import "./index.scss";
export default function File(props) {
  const {
    name,
    value,
    prepend,
    append,
    accept,
    placeholder,
    inputClassName,
    outerClassName,
  } = props;
  const refInputFile = useRef(null);
  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          type="file"
          name={name}
          ref={refInputFile}
          value={value}
          className="d-none"
          onChange={props.onChange}
        />
        <input
          defaultValue={value}
          onClick={() => refInputFile.current.click()}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

File.defaultProps = {
  placeholder: "Browse a file...",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.string, propTypes.number]),
  append: propTypes.oneOfType([propTypes.string, propTypes.number]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
