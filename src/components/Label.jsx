import React from "react";

const Label = (props) => {
  return (
    <label className="label" htmlFor={props.name}>
      {props.description}
    </label>
  );
};

export default Label;
