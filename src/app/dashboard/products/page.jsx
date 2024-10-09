import { DashboardProductList } from '@/components/dasboard-product-list';
import React from 'react'

const Page =async () => {

  const res = await fetch("https://dummyjson.com/products");
  const data = await  res.json();

  return (
    <DashboardProductList products={data.products} />
  )
}

export default Page