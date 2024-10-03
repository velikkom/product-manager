"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const Redirect = () => {

  const router = useRouter();

  const handleClick = () => {
    const res = confirm("Are you sure? you want to redirect");
    if (!res) return;

    throw new Error("Something went wrong");
    // router.push("/dashboard");
    
    
  };
  return (
    <div>
      <Button onClick={handleClick}>Redirect</Button>
    </div>
  );
};
