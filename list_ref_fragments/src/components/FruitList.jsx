import React, { useState, useRef, useEffect, Fragment } from "react";

const FruitList = ({ theme }) => {
  const [fruits, setFruits] = useState(() => {
    const savedFruits = localStorage.getItem("fruits");

    return savedFruits
      ? JSON.parse(savedFruits)
      : [
          { id: 1, name: "Apple", color: "red", quantity: 5 },
          { id: 2, name: "Orange", color: "pink", quantity: 10 },
          { id: 3, name: "Banana", color: "blue", quantity: 15 },
        ];
  });

  const [newFruit, setNewFruit] = useState({
    name: "",
    color: "",
    quantity: 1,
  });

  const nameinputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("fruits", JSON.stringify(fruits));
  }, [fruits]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFruit({
      ...newFruit,
      [name]: name === "quantity" ? Number(value) : value,
    });
  };

  const addFruit = (event) => {
    event.preventDefault();
    if (!newFruit.name || !newFruit.color) return;
    const newId =
      fruits.length > 0 ? Math.max(...fruits.map((f) => f.id)) + 1 : 1;
    /*
        [
            { id: 1, name: "Apple", color: "red", quantity: 5 }
        ] => 2
        [
            { id: 1, name: "Apple", color: "red", quantity: 5 },
            { id: 2, name: "Orange", color: "pink", quantity: 10 },
        ]  
         Math.max(1 , 2) => 2 + 1 => 3
      */
    setFruits([...fruits, { ...newFruit, id: newId }]);
    setNewFruit({ name: "", color: "", quantity: 1 });
    nameinputRef.current.focus();
  };

  const deleteFruit = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
  };

  return (
    <Fragment>
      <h2>Fruit List</h2>

      <form></form>
    </Fragment>
  );
};

export default FruitList;
