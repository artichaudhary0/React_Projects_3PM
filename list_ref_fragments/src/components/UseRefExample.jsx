import { useEffect, useRef } from "react";

/*
Refs allow direct access to DOM elements and react components.
Comman case : 
  focus.
  animation
  fetching data without needing state
  storing previous values
*/

const UseRefExample = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    alert(`You entered : ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter something" />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
};

export default UseRefExample;
