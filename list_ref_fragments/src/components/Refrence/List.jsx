import React from "react";
/*

    Array : ['red' , 'green'... null , undefined , object]

    List allow rendering multiple similar component dynamically.
    .map() => javascript.
    each and every list item must have unique keys.
*/

const List = () => {
  const fruits = ["Apple", "watermelon", "Kiwi", "Grapes"];
  //   function color() {
  //     let colorValue = ["red", "green", null, undefined, {}];
  //     let itemPrice = [133, 3453, 345, 354534, {}, null, undefined];
  //     // sale 50% itemPrice
  //     let salePrice = itemPrice.map((i) => i * 0.5);
  //     console.log(salePrice);
  //   }
  //   color();

  return (
    <div>
      <h1>Un-ordered List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      {/* 
            <li key ={0}>Apple</li>
            <li key ={1}>watermelon</li>
            <li key ={2}>Kiwi</li>
            <li key ={3}>Grapes</li>
       */}
    </div>
  );
};

export default List;
