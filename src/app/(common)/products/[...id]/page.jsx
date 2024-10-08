import { PageHeader } from "@/components/page-header";
import React from "react";


export const generateMetadata = () => {

  //fetching data
  return{
    title: "Dynamik Products details ",
  description: "Cheap electronic devices",
  }
  
};


const Page = ({ params }) => {
  console.log("product details sayfası dinamik");
  return (
    <>
      <PageHeader title="Product" />
      Product Details Page: {params.id}
    </>
  );
};

export default Page;
