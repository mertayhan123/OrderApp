import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import Categories from '../components/categories/Categories'
import Products from '../components/products/Products'
import CartTotals from '../components/cartTotals/CartTotals'
import { useState } from 'react'

const HomePage = () => {


    const [categories, setCategories] = useState([])
    useEffect(() => {
       const getcategories = async () => {
       try
       {
        const res = await fetch("http://localhost:3000/api/categories/get-all")
        const data = await res.json()
        setCategories(data)
        
       }
        catch (error) {
          console.log(error)
        }
      
      
      }
      getcategories()

    }
    , [])


  return (
    <div>
         <Header />
      <div className="home px-6 flex flex-col justify-between md:flex-row md:pb-0 pb-10">
      <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] md:pb-64">
      <Categories categories={categories} setCategories={setCategories} />
      </div>

      <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10c">
      <Products />
      </div>

      <div className="ml-2">
        <CartTotals />
      </div>




      </div>
    </div>
  )
}

export default HomePage