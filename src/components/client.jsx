"use client";
import React from "react";

export const Client = ({ children }) => {
  return (
    <div>
      <p> This is a client Component</p>
      <button onClick={() => alert("This is a client Component")}>
        Click Client button
      </button>

      {children}
    </div>
  );
};
