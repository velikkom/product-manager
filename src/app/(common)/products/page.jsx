import { PageHeader } from "@/components/page-header";
import { ProductList } from "@/components/product-list";
import React from "react";

export const metadata = {
  title: "Products",
  description: "Cheap electronic devices",
};

//export const dynamic = "force-dynamic";
export const revalidate = 30;//her 30 sn yede datayı back end den ceker.

const Page = async () => {
  const res = await fetch(
    "https://66c39605d057009ee9c0b99e.mockapi.io/products"
  );
  const data = await res.json();

  return (
    <>
      <PageHeader title="Products" />
      <ProductList products={data} />
    </>
  );
};

export default Page;
