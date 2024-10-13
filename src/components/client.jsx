"use client";
import React from "react";

export const Client = ({ children }) => {
  console.log("Client component");

  return (
    <div>
      <p>This is a client component</p>
      <button onClick={() => console.log("Hello client")}>
        Click Client Button
      </button>

      {children}
    </div>
  );
};
