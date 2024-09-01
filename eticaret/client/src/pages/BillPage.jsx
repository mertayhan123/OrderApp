import PrintBill from '../components/bills/PrintBill';
import Header from '../components/header/Header'
import React from 'react'
import { useState } from "react";
import { Button, Card, Table } from "antd";

const BillPage = () => {
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
    <div className=' flex justify-end mt-4'>
        <Card className='w-72'>
            
            <Button className='mt-4' type='primary' onClick={() => setIsModalOpen(true)} block>Yazdır</Button>
        </Card>
    </div>

     </div>
     <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

    </>
    
)
}

export default BillPage