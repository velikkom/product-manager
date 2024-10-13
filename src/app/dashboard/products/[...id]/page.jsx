import { DashboardProductEdit } from "@/components/dashboard-product-edit";
import React from "react";

const API_URL = "https://66c395ffd057009ee9c0b957.mockapi.io/products";

const Page = async ({ params }) => {

  const res = await fetch(`${API_URL}/${params.id}`);
  const data = await res.json();

 

  return (
    <div>
      <DashboardProductEdit product={data} />
    </div>
  );
};

export default Page;
