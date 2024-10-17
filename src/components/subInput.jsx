import React from "react";

const subInput = () => {
  return (
    <input
      type="text"
      name="date"
      dateValue={props.value}
      onChange={props.onChangeDate}
    />
  );
};

export default subInput;
