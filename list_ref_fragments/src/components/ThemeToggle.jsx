import React, { Fragment } from "react";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Fragment>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: theme === "light" ? "#222" : "#fff",
          color: theme === "light" ? "#fff" : "#222",
        }}
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙" : "🌞"}
      </button>
    </Fragment>
  );
}

export default ThemeToggle;
