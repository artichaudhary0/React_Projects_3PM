import React, { Fragment } from "react";

function Header({ activeTab, setActiveTab, theme }) {
  // custom keys 
  const navItems = [
    { id: "home", lable: "Home" },
    { id: "todos", lable: "Todo List" },
    { id: "profile", lable: "User Profile" },
    { id: "counter", lable: "Counter" },
    { id: "fruits", lable: "Fruit List" },
  ];

  const headerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
  };

  const navStyle = {
    display: "flex",
    gap: "10px",
  };

  return (
    <Fragment>
      <header style={headerStyle}>
        {/* logo */}
        {/* image */}

        <nav>
          <ul style={navStyle}>
            {navItems.map((item) => (
              <li
                key={item.id}
                style={{
                  cursor: "pointer",
                  padding: "5px 10px",
                  color: activeTab === item.id ? "white" : "inherit",
                  backgroundColor:
                    activeTab === item.id ? "#646cff" : "transparent",
                  listStyle: "none",
                }}
                onClick={() => setActiveTab(item.id)}
              >
                {item.lable}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
