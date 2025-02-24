import React from "react";

// component props : simple js object as arug pass
function UserName(props) {
  const { name, qualification } = props;

  console.log(props); // {}
  /*
      props = {name: 'Arti', qualification: 'Btech'}
      props.name
  
  */

  return (
    <div>
      <h1>{name}</h1>
      <p>{qualification}</p>
    </div>
  );
}

export default UserName;
