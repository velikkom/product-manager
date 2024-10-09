import { PageHeader } from "@/components/page-header";
import { ProductDetails } from "@/components/product-details";

import React from "react";

export const generateMetadata = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await res.json();
  return {
    title: data.title,
    description: data.description,
  };
};

const Page = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <PageHeader title={data.title} />
      <ProductDetails product={data} />
    </>
  );
};

export default Page;
