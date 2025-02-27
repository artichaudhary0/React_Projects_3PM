import { useState } from "react";

/*
Controlled Components :
1 : A controlled component is a form input element where React Controls the state of input value.
2 : The value is stored in react state {useState}.
3 : and any update to the input field(value) updated the state.

How it works :
1 : The components has an internal state (useState).
2 : The input fields value is bound to the state.
3 : Every change triggers an onChange handler, update the state.
*/

function Controlled() {
  const [name, setName] = useState(""); // React state use to store input value
  const handleChange = (event) => {
    setName(event.target.value); // update state when input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name : ${name}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Controlled;
