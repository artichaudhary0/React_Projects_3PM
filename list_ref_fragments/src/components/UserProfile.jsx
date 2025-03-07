import React, { Fragment, useEffect, useState } from "react";

const UserProfile = ({ theme }) => {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("userProfile"); // userdata

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "User1",
          email: "user@gmail.com",
          bio: "React developer.",
          theme: "light",
          notification: false,
        };
  });

  const [isEditing, setIsEditing] = useState(false); // start editing

  const [formData, setFormData] = useState({ ...profile });

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
  }, [profile]); // when ever user changes data

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
            <h3>Name : {profile.name}</h3>
            <h3>Email : {profile.email}</h3>
            <h3>Bio : {profile.bio}</h3>
            <h3>Theme : {profile.theme}</h3>
            <h3>
              Notification : {profile.notification === true ? "true" : "false"}
            </h3>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Edit your name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Edit your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <input
                type="text"
                name="bio"
                placeholder="Edit your bio"
                value={formData.bio}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="light">Light Theme</option>
                <option value="dark">Dark Theme</option>
              </select>
            </div>

            <div>
              <label>Enable Notification</label>
              <input
                type="checkbox"
                name="nofitication"
                checked={formData.notification}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default UserProfile;
