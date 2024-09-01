import React from 'react'

import Header from '../components/header/Header'

import { Table } from "antd";


const Customer = () => {
    const dataSource = [
        {
          key: "1",
          name: "Mike",
          age: 32,
          address: "10 Downing Street",
        },
        {
          key: "2",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
      ];
    
      const columns = [
        {
          title: "İsim",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Yaş",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Adres",
          dataIndex: "address",
          key: "address",
        },
      ];
    return (
        <>
          <Header />
          <div className="px-6">
            <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
            <Table
              dataSource={dataSource}
              columns={columns}
              bordered
              pagination={false}
            />
          </div>
        </>
      );
}

export default Customer