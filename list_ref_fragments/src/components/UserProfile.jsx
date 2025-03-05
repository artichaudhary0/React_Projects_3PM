import React, { Fragment, useState } from "react";

const UserProfile = ({ theme }) => {
  const [profile, setProfile] = useState({
    name: "User1",
    email: "user@gmail.com",
    bio: "React developer.",
    theme: "light",
    notification: true,
  });

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkedbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
    setIsEditing(false);
  };

  const inputStyle = {
    padding: "10px",
    border: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
    borderRadius: "5px",
  };

  const buttonStyle = {
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  };

  return (
    <Fragment>
      <h2>user Profile</h2>
      <p>Using state for form handling</p>
      {!isEditing ? (
        <div style={{ backgroundColor: theme === "light" ? "#ddd" : "#444" }}>
          <div>
            <h3>{profile.name}</h3>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Hello manav</h3>
        </div>
      )}
    </Fragment>
  );
};

export default UserProfile;
