import React, { useRef } from "react";

function AnimateBox() {
  const boxRef = useRef(null);

  const moveBox = () => {
    boxRef.current.style.transform = "translate(100px)";
    boxRef.current.style.transition = "transform 0.5s ease-in-out";
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "50px", height: "50px", backgroundColor: "blue" }}
      ></div>
      <button onClick={moveBox}>move</button>
    </div>
  );
}

export default AnimateBox;
