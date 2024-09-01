import Header from '../components/header/Header'
import React from 'react'
import { Button, Card, Table } from "antd";
import { useState } from "react";
import Create from "../components/cartTotals/Create";


const CartPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
      ];
  return (
    <>
     <Header />
     <div className='px-6'>
    <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
    <div className=' flex justify-end mt-0-4'>
        <Card className='w-72'>
            <div className='flex justify-between'>
                <span>Ara Toplam</span>
                <span>165₺</span>
            </div>
            <div  className='flex justify-between my-2'>
                <span>Kdv Toplam</span>
                <span>165₺</span>
            </div>
            <div className='flex justify-between'>
                <b>Toplam</b>
                <b>165₺</b>
            </div>
            <Button className='mt-4' type='primary' onClick={() => setIsModalOpen(true)} block>Siparişi Tamamla</Button>
        </Card>
    </div>

     </div>
     <Create isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

    </>
)
}

export default CartPage