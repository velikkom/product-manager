import { DashboardProductList } from '@/components/dasboard-product-list';
import React from 'react'

const Page =async () => {

  const res = await fetch(
		"https://66c39605d057009ee9c0b99e.mockapi.io/products"
	);
  const data = await  res.json();

  return (
    <DashboardProductList products={data} />
  )
}

export default Page