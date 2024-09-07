import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import CartTotals from "../components/cartTotals/CartTotals";
import { useState } from "react";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("")

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
  useEffect(() => {
    const getcategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories/get-all");
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };
    getcategories();
  }, []);

  return (
    <div>
      <Header setSearch={setSearch} />
      <div className="home px-6 flex flex-col justify-between md:flex-row md:pb-0 pb-10 h-screen">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] md:pb-64">
          <Categories
            categories={categories}
            setCategories={setCategories}
            setFiltered={setFiltered}
            products={products}
          />
        </div>

        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10c">
          <Products
            categories={categories}
            filtered={filtered}
            products={products}
            setProducts={setProducts}
            search={search}

          />
        </div>

        <div className="ml-2">
          <CartTotals />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
