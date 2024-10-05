"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import Image from "next/image";

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-dark fs-1 " data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="fs-1" href="/" as={Link}>
          <Image src="/images/logo (1).png" alt="Cosmo Shop" width={250} height={40} />
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={item.url}
                as={Link}
                prefetch={item.prefetch}
              >
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
