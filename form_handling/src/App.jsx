import "./App.css";
import FormController from "./components/FormController";
import { useEffect, useState } from "react";

/*
useEffect : 

*/

function App() {
  // const [counter, setCounter] = useState(0);
  // const [text, setText] = useState("ofguhfug9o");

  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   alert("hello");
  //   // }, 3000);
  //   alert("hello");
  // }, []); // [] denotes refresh.

  // useEffect(() => {
  //   alert("hellloo");
  // }, [counter, text]);

  return (
    <>
      {/* <h1>{text}</h1>
      <h1> count : {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setText(counter + 1 + "value");
        }}
      >
        Increment
      </button> */}

      {/* <FormController textColor={"grey"} /> */}
      <FormController />
    </>
  );
}

export default App;
