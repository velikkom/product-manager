import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiPlus } from "react-icons/tfi";

export const ButtonNewProduct = () => {
  return (
    <Button variant="warning" as={Link} href="/dashboard/products/new">
      <TfiPlus /> New
    </Button>
  );
};
