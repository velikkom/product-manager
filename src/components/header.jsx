"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import Image from "next/image";

export const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-dark d-flex "
      data-bs-theme="dark"
      collapseOnSelect
    >
      <Container className="flex-row p-2  bd-highlight ">
        <Navbar.Brand className="fs-3  " href="/" as={Link}>
          <Image
            src="/images/logo (1).png"
            alt="Cosmo Shop"
            width={250}
            height={40}
            priority
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav    ">
          <Nav className=" justify-content-evenly m-4">
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
