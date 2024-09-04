import React from "react";
import {Link} from "react-router-dom";
import { Input ,Badge} from 'antd';
import {  SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    BarChartOutlined,
    LogoutOutlined } from '@ant-design/icons'; 

import { useSelector } from "react-redux";    

const Header = () => {


  const cart = useSelector((state) => state.cart);


  return (
   <div className="border-b mb-2 bgcolor">
     <header className="flex justify-between items-center py-4 px-6 ">
      <div className="logo mr-2">
        <a href="/">
          <h2 className="text-2xl font-bold md:text-4xl"> 
          AYHAN
          </h2>
        </a>
      </div>
      <div className="header-search flex flex-1 justify-center " >
      <Input size="large"  className="rounded-full max-w-[800px] md" placeholder="Ara"  prefix={<SearchOutlined/>} /> 
     
      </div>
      <div className="menu-links flex justify-between items-center gap-8 md:static fixed bottom-0 md:w-auto w-screen md:bg bg-transparent bgcolor left-0 md:border-t-0 border-t">
          <Link to={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]  ">
            <HomeOutlined className="md:text-2xl text-xl justify-center" />
            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
          </Link>
          <Link to={"/cart"} className="menu-link  flex-col hover:text-[#40a9ff] md:flex hidden ">
          <Badge count={cart.cartItems.length} className="hover:text-[#40a9ff]" >
            <ShoppingCartOutlined className="md:text-2xl text-xl justify-center" />
            </Badge>
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
          
          <Link to={"/bill"} className="menu-link flex flex-col hover:text-[#40a9ff]">
            <CopyOutlined className="md:text-2xl text-xl justify-center" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </Link>
          <Link to={"/customer"} className="menu-link flex flex-col hover:text-[#40a9ff]">
            <UserOutlined className="md:text-2xl text-xl justify-center" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </Link>
          <Link to={"/statistic"} className="menu-link flex flex-col hover:text-[#40a9ff]">
            <BarChartOutlined className="md:text-2xl text-xl justify-center" />
            <span className="md:text-xs text-[10px]">İstatistikler</span>
          </Link>
          <a href={"/"} className="menu-link flex flex-col hover:text-[#40a9ff]">
            <LogoutOutlined  className="md:text-2xl text-xl justify-center" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </a>
      </div>
      <a href={"/"} className="flex flex-col hover:text-[#40a9ff] md:hidden ml-2 mt-2 ">
          <Badge count={cart.cartItems.length} className="hover:text-[#40a9ff]" >
            <ShoppingCartOutlined className="md:text-2xl text-xl justify-center" />
            </Badge>
            <span className="md:text-xs text-[10px]">Sepet</span>
          </a>
    </header>
   </div>
  );
};

export default Header;
