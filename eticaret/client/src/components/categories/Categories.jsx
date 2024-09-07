import React, { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";




import { useEffect } from "react";
import Add from "./Add";
import { EditOutlined } from "@ant-design/icons";
import Edit from "./Edit";


const Categories = ({ categories, setCategories,setFiltered,products}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");


  useEffect(() => {
    if(selectedCategory === "Tümü"){
      setFiltered(products)
    }
    else {
      setFiltered(products.filter((item) => item.category === selectedCategory));
    }
  }, [products,setFiltered,selectedCategory])
  

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      {categories.map((item) => (
       <li
       className={`category-item  ${
         item.title === selectedCategory && "!bg-[#443c2f] text-white"
       } rounded-md hover:opacity-90 `}
       key={item._id}
       onClick={() => setSelectedCategory(item.title)}
     >
       
       {item.title}
     </li>
      ))}
      <li
        className="category-item !bg-[#B6C7AA] rounded-md hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li
        onClick={() => setIsEditModalOpen(true)}
        className="category-item !bg-[#B6C7AA] rounded-md hover:opacity-90"
      >
        <EditOutlined className="md:text-2xl" />
      </li>
      <Add
        categories={categories}
        setCategories={setCategories}
        setIsAddModalOpen={setIsAddModalOpen}
        isAddModalOpen={isAddModalOpen}
      />
      <Edit
        categories={categories}
        setIsEditModalOpen={setIsEditModalOpen}
        isEditModalOpen={isEditModalOpen}
        setCategories={setCategories}
      />
      
    </ul>
  );
};

export default Categories;
