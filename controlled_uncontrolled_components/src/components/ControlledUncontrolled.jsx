import React, { useRef, useState } from "react";

const ControlledUncontrolled = () => {
  // toggle controlled and uncontrolled.
  const [isControlled, setIsControlled] = useState(true); // controlled

  // controlled form (State)data
  const [formData, setFormData] = useState({
    name: "", // type = text
    email: "", // type = email
    password: "", // type = password
    age: "", // type = number
    gender: "female", // type = radio
    bio: "", // type = text
    hobbies: [], // checkbox
    country: "India", // type = select
    terms: false, // type = radio / checkbox
  });

  // uncontrolled form state
  const nameRef = useRef();
  const emailref = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const bioRef = useRef();
  const countryRef = useRef();
  const termRef = useRef();
  const hobbyRef = useRef([]);

  // controlled input handler :
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checked" && name !== "terms"
          ? checked // true
            ? [...prev.hobbies, value]
            : prev.hobbies.filter((hobby) => hobby !== value)
          : type === "checked"
          ? checked
          : value,
    }));
  };

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isControlled) {
      // controlled
      console.log("form submitted");
    } else {
      // uncontrolled
      const hobbies = hobbyRef.current
        .filter((ref) => ref.checked)
        .map((ref) => ref.value);
      console.log("Uncontrolled form data : ", {
        name: nameRef.current.value,
        email: emailref.current.value,
        password: passwordRef.current.value,
        age: ageRef.current.value,
        gender: genderRef.current.value,
        bio: bioRef.current.value,
        country: countryRef.current.value,
        terms: termRef.current.value,
        hobbies,
      });
    }
  };

  const handleToggle = () => {
    setIsControlled(!isControlled);
    console.log(isControlled);
  };

  return (
    <div>
      <h1>{isControlled ? "Controlled " : "uncontrolled"} Form</h1>
      <label>
        <input type="checkbox" checked={isControlled} onChange={handleToggle} />
      </label>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        {isControlled ? (
          <input type="text" value={formData.name} onChange={handleChange} />
        ) : (
          <input type="text" ref={nameRef} />
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledUncontrolled;
