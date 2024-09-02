import React, { useEffect } from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import { EditOutlined,PlusCircleOutlined } from "@ant-design/icons";
import Add from "./Add";
import {  useNavigate } from "react-router-dom";

const Products = ({categories}) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);


  const navigate =useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="products-wrapper grid grid-cols-card gap-4 ml-2">
      {products.map((item) => (
       <ProductItem  mert={item} />//props olarak bilerek mert adını verdim bazen karışıklık olabiliyor (deneme)
      ))}
      <div className="product-item  border hover:shadow-lg cursor-pointer transition-all select-none bg-black flex justify-center items-center rounded-lg hover:opacity-75" onClick={()=> setIsAddModalOpen(true)}>
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
