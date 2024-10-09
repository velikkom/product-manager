import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import { TfiPencil } from "react-icons/tfi";

export const ButttonEditProduct = ({ id }) => {
  return (
    <Button variant="link" as={Link} href={`/dashboard/products/${id}`}>
      <TfiPencil />
    </Button>
  );
};
