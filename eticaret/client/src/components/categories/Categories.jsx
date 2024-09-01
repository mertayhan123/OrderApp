import React, { useState } from "react";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";

import Add from "./Add";
import { EditOutlined } from "@ant-design/icons";
import Edit from "./Edit";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      {categories.map((category) => (
        <li key={category._id} className="category-item ">
          {category.title}
        </li>
      ))}
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li
        onClick={() => setIsEditModalOpen(true)}
        className="category-item !bg-purple-800 hover:opacity-90"
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
