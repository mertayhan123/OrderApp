import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Kullanici from "../images/user.png";
import Statistic from "../components/statistic/StatisticCard";
import Sale from "../images/sale.png";
import Product from "../images/product.png";
import { Pie } from "@ant-design/plots";
import { PieChart } from '@mui/x-charts/PieChart';




const StatisticPage = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const user =JSON.parse( localStorage.getItem("posUser"))
  useEffect(() => {
    asyncFetch();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      updateProductStats();
    }
  }, [data]);

  const asyncFetch = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/bills/get-all");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("fetch data failed", error);
    }
  };
  console.log(data,"data");

  const updateProductStats = () => {
    // Tüm cartItems dizilerini birleştirme
    const allCartItems = data.flatMap((customer) => customer.cartItems);

    // Aynı üründen toplam adet ve toplam satış miktarını hesaplama
    const productStats = allCartItems.reduce((acc, item) => {
      if (!acc[item.title]) {
        acc[item.title] = { totalQuantity: 0, totalPrice: 0 };
      }
      acc[item.title].totalQuantity += item.sayac;
      acc[item.title].totalPrice += item.price * item.sayac;
      return acc;
    }, {});

    // Ürünleri Pie grafik için uygun formata dönüştürme
    const productData = Object.keys(productStats).map((key) => ({
      title: key,
      value: productStats[key].totalQuantity,
    }));

    setProducts(productData);
  };
  console.log(products,"products");

  const totalAmount = () => {
    const amount = data.reduce((total, item) => item.subTotal + total, 0);
    return `${amount.toFixed(2)}₺`;
  };



  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="font-bold text-center text-4xl mb-4">İstatistikler</h1>
        <div className="statistic-section">
          <h2 className="text-center">
            Hoş geldiniz{" "}
            <span className="text-green-700 font-bold text-xl">{user.username}</span>
          </h2>

          <div className="statistic-cards flex mt-5 justify-center lg:flex-row flex-col gap-4">
            <Statistic
              title="Toplam Kullanıcı"
              amount={data?.length}
              img={Kullanici}
            />
            <Statistic title="Toplam Satış" amount={totalAmount()} img={Sale} />
            <Statistic
              title="Toplam Ürün"
              amount={products.length}
              img={Product}
            />
          </div>
          <div className="flex justify-center gap-10 lg:flex-row flex-col items-center">
            <div className="flex justify-center">
              <PieChart
                series={[
                  {
                    data: products.map((product) => ({
                      label: product.title,
                      value: product.value,
                    })),
                    
                    
                  },
                ]}
                width={900}
                height={500}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
