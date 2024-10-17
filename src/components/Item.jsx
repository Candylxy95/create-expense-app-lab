import React from "react";
import Label from "./Label";
import Button from "./Button";

const Item = (props) => {
  return (
    <div className="itemSection">
      <Label description={props.itemDes} />
      <Label description={props.itemPri} />
      <Label description={props.itemDatName} />
      <Button className="button update" onClick={props.updateBtn}>
        update
      </Button>
      <Button className="button delete" onClick={props.deleteBtn}>
        delete
      </Button>
    </div>
  );
};

export default Item;

{
  /* <button
className={`btn ${props.className}`}
type="button"
onClick={props.onClick}
>
{props.children}
</button> */
}
