import { PageHeader } from "@/components/page-header";
import { ProductDetails } from "@/components/product-details";
import { RelatedProducts } from "@/components/related-products";

import React from "react";

const API_URL = "https://66c39605d057009ee9c0b99e.mockapi.io/products";

export const generateMetadata = async ({ params }) => {
  const res = await fetch(`${API_URL}/${params.id}`);
  const data = await res.json();
  return {
    title: data.title,
    description: data.description,
  };
};

const Page = async ({ params }) => {
  const fetchProduct = (await fetch(`${API_URL}/${params.id}`)).json();

  const fetchRelatedProducts = (await fetch(API_URL)).json();

  const [product, relatedProducts] = await Promise.all([
    fetchProduct,
    fetchRelatedProducts,
  ]);

  return (
    <>
      <PageHeader title={product.title} />
      <ProductDetails product={product} />
      <RelatedProducts relatedProducts={relatedProducts} />
    </>
  );
};

export default Page;
