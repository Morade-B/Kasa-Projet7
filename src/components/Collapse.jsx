import React, { useState } from "react";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-header">
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? "up" : "down"}`}  onClick={toggleCollapse}></span>
      </div>
      <div
        className="collapse-content"
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
