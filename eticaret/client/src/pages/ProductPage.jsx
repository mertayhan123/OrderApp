import React from 'react'
import Header from '../components/header/Header'
import Edit from '../components/products/Edit'

const ProductPage = () => {
  return (
    <>
    <Header />
    <div>
        <h1 className='text-4xl text-center font-bold mb-4'>Product Page</h1>
        <Edit />
    </div>
    </>
  )
}

export default ProductPage