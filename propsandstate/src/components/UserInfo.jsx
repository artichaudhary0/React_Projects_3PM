import React from "react";

function UserInfo({ name, qual }) {
  console.log(name, qual);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{qual}</h1>
    </div>
  );
}

UserInfo.defaultProps = {
  name: "Arti",
  qual: "Btech",
};

export default UserInfo;
