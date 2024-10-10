import { DashboardProductList } from '@/components/dasboard-product-list';
import React from 'react'

const Page =async () => {

  const res = await fetch(
		"https://66c395ffd057009ee9c0b957.mockapi.io/products"
	);
  const data = await  res.json();

  return (
    <DashboardProductList products={data} />
  )
}

export default Page