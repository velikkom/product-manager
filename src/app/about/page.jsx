import Link from "next/link";
import path from "path";
import React from "react";

const Page = () => {
  return (
    <div>
      About Page
      <p>
        <Link href="/">Home</Link>
      </p>
      <p>
        <Link href={{
          pathname: "/products",
          query: {
            page: 1,
            sort: "name",
            limit: "",
            order: "asc",
            status: "active",
            category: "laptop",
          },
        }}
        
        >
          Products
        </Link>
      </p>
    </div>
  );
};

export default Page;
