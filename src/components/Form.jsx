import React from "react";
import Item from "./Item";

const Form = (props) => {
  return (
    <ul>
      {props.expenses.map((expense, idx) => {
        return (
          <li key={idx}>
            <Item
              itemDes={expense.itemName}
              itemPri={expense.price}
              itemDatName={expense.date}
              updateBtn={() => {
                props.updateBtn(expense, idx);
              }}
              deleteBtn={() => {
                props.deleteBtn(expense, idx);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Form;
