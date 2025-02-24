import React from "react";

function PropsDefault({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default PropsDefault;

// function PropsDefault({ name, age, education }) {
//   return (
//     <div>
//       <h1>Name : {name}</h1>
//       <h1>Age : {age}</h1>
//       <h1>Education : {education}</h1>
//     </div>
//   );
// }

// PropsDefault.defaultProps = {
//   name: "Arti",
//   age: "45",
//   education: "Btech",
// };

// export default PropsDefault;

// function PropsDefault({ name = '', age='', education = "12 pass" }) {
//   console.log(name);
//   console.log(age);
//   console.log(education);

//   /*
//   inital
//   name : ''
//   age : ''
//   education : '12 pass'

//   after passing props
//   name : 'Arti'
//   age : '45'
//   education : 'Btech'
//   */

//   return (
//     <div>
//       <h1>Name : {name}</h1>
//       <h1>Age : {age}</h1>
//       <h1>Education : {education}</h1>
//     </div>
//   );
// }

// function PropsDefault(props) {
//   // {name: 'Arti'} object

//   const { name, age } = props;
//   console.log(props);
//   return (
//     <div>
//       <h1>Name : {name}</h1>
//       <h1>Age : {age}</h1>
//       <h1>Education : {education}</h1>
//     </div>
//   );
// }

// export default PropsDefault;
