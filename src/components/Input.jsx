import React from "react";
import Label from "./Label";
import Button from "./Button";
import SubInput from "./subInput";

const Input = (props) => {
  return (
    <div className="inputSection">
      <section>
        <div>
          <Label name="item" description="Item: " />
          &nbsp;
          <SubInput
            value={props.itemValue}
            onChange={props.onChangeItem}
            placeholder="Item Name"
          />
        </div>
        <div>
          <Label name="price" description="Price: " />
          &nbsp;
          <SubInput
            value={props.priceValue}
            onChange={props.onChangePrice}
            placeholder="Price"
          />
        </div>
        <div>
          <Label name="Date" description="Date: " />
          &nbsp;
          <SubInput value={props.dateValue} onChange={props.onChangeDate} />
        </div>
      </section>
      <Button className="button submit" onClick={props.onClick}>
        {props.isEditing ? "update" : "submit"}
      </Button>
    </div>
  );
};

export default Input;
