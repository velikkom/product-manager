import { PageHeader } from "@/components/page-header";
import React from "react";

const Page = ({ params }) => {
  console.log({ params });
  return (
    <>
      <PageHeader title="Product" />
      Product Details Page: {params.id}
    </>
  );
};

export default Page;
