// Preserve value without re-rendering

import React, { useRef, useState } from "react";

function PreserveValue() {
  const renderCount = useRef(0);

  const [count, setCount] = useState(0);

  const handelRef = () => {
    renderCount.current += 1;
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count : {count} </p>
      <p>Component rerender : {renderCount.current}</p>
      <button onClick={handelRef}>Increment</button>
    </div>
  );
}

export default PreserveValue;
