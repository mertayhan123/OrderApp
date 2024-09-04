import React from "react";

import Header from "../components/header/Header";
import { useState, useEffect } from "react";

import { Table } from "antd";


  

const Customer = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
  const getBills = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/bills/get-all");
      const data = await res.json();
      setBills(data);
    } catch (error) {
      console.log(error);
    }
  };
  getBills();
  }, []);
  const columns = [
    {
      title: "İsim",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
   
  ];
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
        <Table
          dataSource={bills}
          columns={columns}
          bordered
          pagination={false}
        />
      </div>
    </>
  );
};

export default Customer;
