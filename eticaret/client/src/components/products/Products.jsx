import React, { useEffect } from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined,PlusCircleOutlined } from "@ant-design/icons";
import Add from "./Add";
import {  useNavigate } from "react-router-dom";

const Products = ({categories ,filtered,products,setProducts,search}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);


  const navigate =useNavigate();
 

  return (
    <div className="products-wrapper grid grid-cols-card gap-4 ml-2">
      {filtered.filter((products)=> products.title.toLowerCase().includes(search)).map((item) => (
       <ProductItem  mert={item} />//props olarak bilerek mert adını verdim bazen karışıklık olabiliyor (deneme)
      ))}
      <div className="product-item  border hover:shadow-lg cursor-pointer transition-all select-none bg-black flex justify-center items-center rounded-lg hover:opacity-75 p-7" onClick={()=> setIsAddModalOpen(true)}>
      <PlusCircleOutlined className="text-8xl text-white"/>
      </div>
      <div className="product-item  border hover:shadow-lg cursor-pointer transition-all select-none bg-black flex justify-center items-center rounded-lg hover:opacity-75" onClick={()=>navigate("/product")}>
      <EditOutlined className="text-8xl text-white"/>
      </div>  
      <Add isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} products={products} setProducts={setProducts} categories={categories} />
    </div>
  );
};

export default Products;
