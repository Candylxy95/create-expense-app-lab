import React from "react";
import Label from "./Label";
import Button from "./Button";

const Input = (props) => {
  return (
    <div className="inputSection">
      <section>
        <div>
          <Label name="item" description="Item: " />
          &nbsp;
          <input
            type="text"
            name="item"
            value={props.itemValue}
            onChange={props.onChangeItem}
            placeholder="Item Name"
          />
        </div>
        <div>
          <Label name="price" description="Price: " />
          &nbsp;
          <input
            type="text"
            name="price"
            value={props.priceValue}
            onChange={props.onChangePrice}
            placeholder="Price"
          />
        </div>
        <div>
          <Label name="Date" description="Date: " />
          &nbsp;
          <input
            type="text"
            name="date"
            value={props.dateValue}
            onChange={props.onChangeDate}
          />
        </div>
      </section>
      <Button className="button submit" onClick={props.onClick}>
        {props.isEditing ? "update" : "submit"}
      </Button>
    </div>
  );
};

export default Input;
