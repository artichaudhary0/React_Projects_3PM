import React, { useEffect, useRef, useState } from "react";

function PreviousState() {
  const [count, setCount] = useState(0);
  const prevValueRef = useRef();

  useEffect(() => {
    prevValueRef.current = count;
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Prev : {prevValueRef.current}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousState;
