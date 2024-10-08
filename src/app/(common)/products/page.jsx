import { PageHeader } from '@/components/page-header'
import React from 'react'


export const metadata = {
  title: "Products",
  description: "Cheap electronic devices",
};
const Page = () => {
  console.log("Product sayfası static")
  return (
    <div>
      <PageHeader title="Products" />
    </div>
  )
}

export default Page