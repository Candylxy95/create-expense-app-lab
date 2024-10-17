import React, { useState } from "react";
import Input from "./components/Input";
import Form from "./components/Form";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [storeIdx, setStoreIdx] = useState(0);

  const currentDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(currentDate);

  const handleSubmit = (event) => {
    setExpenses((prevExpenses) => [...prevExpenses, { itemName, price, date }]);
    setItemName("");
    setPrice("");
  };

  const handleDelete = (expense, idx) => {
    setExpenses((prevExpenses) => prevExpenses.toSpliced(idx, 1));
  };

  const handleUpdate = (expense, idx) => {
    setItemName(expenses[idx].itemName);
    setPrice(expenses[idx].price);
    setDate(expenses[idx].date);
    setIsEditing(true);
    setStoreIdx(idx);
  };

  const handleEditSubmit = () => {
    console.warn(storeIdx);
    console.log("onhandleeditsubmit....");
    setIsEditing(false);
    setExpenses((prevExpenses) =>
      prevExpenses.toSpliced(storeIdx, 1, { itemName, price, date })
    );
  };

  return (
    <>
      <Input
        itemValue={itemName}
        priceValue={price}
        dateValue={date}
        onChangeItem={(event) => setItemName(event.target.value)}
        onChangePrice={(event) => setPrice(event.target.value)}
        onChangeValue={(event) => setDate(event.target.value)}
        onClick={!isEditing ? handleSubmit : handleEditSubmit}
        isEditing={isEditing}
      />
      <Form
        expenses={expenses}
        deleteBtn={handleDelete}
        updateBtn={handleUpdate}
      />
    </>
  );
};

export default App;
