import { DashboardProductEdit } from "@/components/dashboard-product-edit";
import React from "react";

const API_URL = "https://66c39605d057009ee9c0b99e.mockapi.io/products";
                

const Page = async ({ params }) => {

  const res = await fetch(`https://66c39605d057009ee9c0b99e.mockapi.io/products/${params.id}`);
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <DashboardProductEdit product={data} />
    </div>
  );
};

export default Page;
