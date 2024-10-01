import React from 'react'

const Page = ({ params }) => {
    console.log({params})
  return <div>Products Detail Page : {params.id}</div>
    
  
}

export default Page
