"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";
import iwatch from "../../public/images/iwatch.png";
import Image from "next/image";

export const Redirect = () => {
  const router = useRouter();

  const handleClick = () => {
    const res = confirm("Are you sure? you want to redirect");
    if (!res) return;

    // throw new Error("Something went wrong");
    // router.push("/dashboard");
  };
  return (
    <div>
      <Image
        src="/images/landscape.jpg"
        alt="Landscape"
        width={300}
        height={300}
      />

      <Image src={iwatch} alt="iwatch" width={321} height={210} />
      <div style={{height: "200px", position: "relative" }}>
        <Image
          src={
            "https://images.unsplash.com/photo-1726853546092-6a2f2c2cf652?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="sun setting"
          style={{objectFit: "cover"}}
          fill
        />
      </div>
      <Button onClick={handleClick}>Redirect</Button>
    </div>
  );
};
