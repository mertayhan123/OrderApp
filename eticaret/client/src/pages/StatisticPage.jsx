import React from "react";
import Header from "../components/header/Header";
import Kullanici from "../images/user.png";
import Statistic from "../components/statistic/StatisticCard";
import Sale from "../images/sale.png";
import Money from "../images/money.png";
import Product from "../images/product.png";
import { Pie } from '@ant-design/plots';


const StatisticPage = () => {
  const config = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="font-bold text-center text-4xl mb-4">İstatistikler</h1>
        <div className="statistic-section">
          <h2 className="text-center">
            Hoş geldiniz{" "}
            <span className="text-green-700 font-bold text-xl">Admin</span>
          </h2>

          <div className="statistic-cards flex mt-5 justify-center lg:flex-row flex-col gap-4" >
            <Statistic title="Toplam Kullanıcı" amount="100" img={Kullanici} />
            <Statistic title="Toplam Satış" amount="100" img={Sale} />
            <Statistic title="Toplam Gelir" amount="100" img={Money} />
            <Statistic title="Toplam Ürün" amount="100" img={Product} />
          </div>
          <div className="flex justify-center gap-10 lg:flex-row flex-col items-center">
         
          <div className="flex justify-center">
          <Pie {...config}/>

          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
