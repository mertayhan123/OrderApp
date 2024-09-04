import PrintBill from "../components/bills/PrintBill";
import Header from "../components/header/Header";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Table } from "antd";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bills, setBills] = useState([]);
  const [customer, setCustomer] = useState([]);

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
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: "Ödeme Şekli",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },

    {
      title: "Toplam Tutar",
      dataIndex: "subTotal",
      key: "subTotal",
      render: (text) => {
        return <span>{text.toFixed(2)}₺</span>;
      },
    },
    {
      title: "İşlem Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>;
      },
    },
    {
      title: "Yazdır",
      dataIndex:"Action",
      key:"Action",

      render: (_, record) => {
        return (
          <Button
            type="primary"
            onClick={() => {
              setCustomer(record),
              setIsModalOpen(true)}}
          >
            Yazdır
          </Button>
        );
      }


    }
  ];
  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={bills}
          columns={columns}
          bordered
          pagination={false}
        />
       
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} customer={customer} />
    </>
  );
};

export default BillPage;
