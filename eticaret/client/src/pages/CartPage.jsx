import Header from '../components/header/Header'
import React from 'react'
import { Button, Card, message, Popconfirm, Table } from "antd";
import { useState } from "react";
import Create from "../components/cartTotals/Create";
import { useDispatch, useSelector } from "react-redux";
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { deleteCartItem, increase, decrease,   } from "../redux/cartSlice.js";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      key: "img",
      width: "125px",
      render: (text) => {
        return <img src={text} alt="" className="w-full h-20 object-cover" />;
      },
    },
    {
      title: "Ürün Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return <span>{text.toFixed(2)}₺</span>;
      },
    },
    {
      title: "Ürün Adeti",
      dataIndex: "sayac",
      key: "sayac",
      render: (text, record) => {
        return (
          <div className="flex items-center">
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
              onClick={() => dispatch(increase(record))}
            />
            <span className="font-bold w-6 inline-block text-center">
              {record.sayac}
            </span>
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
              onClick={() => {
                if (record.sayac === 1) {
                  if (window.confirm("Ürün Silinsin Mi?")) {
                    dispatch(decrease(record));
                    message.success("Ürün Sepetten Silindi.");
                  }
                }
                if (record.sayac > 1) {
                  dispatch(decrease(record));
                }
              }}
            />
          </div>
        );
      },
    },
    {
      title: "Toplam Fiyat",
      render: (text, record) => {
        return <span>{(record.sayac * record.price).toFixed(2)}₺</span>;
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
         <Popconfirm
         title="Silmek için emin misiniz?"
         onConfirm={() => {
          dispatch(deleteCartItem(record));
          message.success("Ürün Sepetten Silindi.");
        }}
        okText="Evet"
        cancelText="Hayır"
         >
           <Button
            type="link"
            danger

          >
            Sil
          </Button>
         </Popconfirm>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            
            
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>{cart.total.toFixed(2)}</b>
            </div>
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              disabled={cart.cartItems.length === 0}

            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <Create isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};
export default CartPage;