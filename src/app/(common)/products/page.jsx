import { PageHeader } from '@/components/page-header'
import { ProductList } from '@/components/product-list';
import React from 'react'


export const metadata = {
  title: "Products",
  description: "Cheap electronic devices",
};
const Page = async() => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
 
 
  return (
    <>
      <PageHeader title="Products" />
      <ProductList  products={data.products} />
    </>
  )
}

export default Page