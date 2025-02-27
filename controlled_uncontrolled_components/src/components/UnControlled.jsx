import { useRef, useState } from "react";

/*
Un-Controlled Components :
1 : form element manages their own internal state instead of react.
2 : Instead of using useState , React's useRef to used to get the input value when needed.

How it works :
1 : Input field maintains its state within the DOM.
2 : React does not track the changes directly.
3 : useRef()
*/

function UnControlled() {
  const inputRef = useRef(null); // useRef to reference input field

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name : ${inputRef.current.value}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UnControlled;
