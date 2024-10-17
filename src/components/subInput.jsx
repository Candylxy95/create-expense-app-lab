import React from "react";

const SubInput = (props) => {
  return (
    <input
      type="text"
      name="date"
      value={props.value}
      onChange={props.onChange}
      placeHolder={props.placeholder}
    />
  );
};

export default SubInput;
