import React from "react";

export default function Sidebar(props) {
  const { name, active, handleChange } = props;
  return (
    <button
      className={`sidebar-button ${active ? "active" : ""}`}
      onClick={handleChange}
    >
      {name}
    </button>
  );
}
