"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge, Card } from "react-bootstrap";

export const ProductCard = ({ id, title, price, thumbnail }) => {
  return (
    <Card className="h-100" href={`/products/${id}`} as={Link}>
      <div className="position-relative" style={{ height: "200px" }}>
        <Card.Img
          variant="top"
          src={thumbnail}
          as={Image}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={title}
          style={{ objectFit: "contain" }}
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <Badge bg="primary">${price}</Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
