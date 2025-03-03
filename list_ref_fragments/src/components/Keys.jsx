import React from "react";

/*
    Keys help React identify which items changed , added or removed.
    It's best to use custom keys {like id} instead of array index when possible 
*/

const Keys = () => {
  // array of object
  const fruits = [
    { id: 11, name: "Apple" },
    { id: 22, name: "Grapes" },
    { id: 33, name: "Watermelon" },
  ];

  return (
    <div>
      <h1>Keys Custom</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Keys;
