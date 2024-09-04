import React from 'react'
import { Modal } from "antd";
import { Button, Card, Form, Input, Select } from "antd";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { reset } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Create = ({ isModalOpen, setIsModalOpen }) => {
    const dispatch = useDispatch();
    const  navigate  = useNavigate();
    const onFinish = async (values) => {

      try {
          const  res =  await fetch("http://localhost:3000/api/bills/add-bill",{
          method:"POST",
          body: JSON.stringify({
            ...values,
            subTotal: cart.total,           
            cartItems: cart.cartItems,
          }),          headers:{"Content-type":"application/json; charset=UTF-8"}
        })
        if (res.status === 200) {
          message.success("Fatura başarıyla oluşturuldu.");
          setIsModalOpen(false);
          dispatch(reset());
          navigate("/");
        } 
      }
      
      catch (error) {
        console.log(error);
      }
    };
    

      const cart = useSelector((state) => state.cart);

      

  return (
    
    <div>
        <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
       <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı"
          name={"customerName"}
          rules={[
            {
              required: true,
              message: "Username is required",
            },
          ]}
        >
          <Input placeholder="Bir Müşteri Adı Yazınız" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          name={"customerPhoneNumber"}
          label="Tel No"
        >
          <Input placeholder="Bir Tel No Yazınız" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Ödeme Yöntemi"
          rules={[{ required: true }]}
          name={"paymentMode"}
        >
          <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <Card>
          
          <div className="flex justify-between">
            <b>Toplam</b>
            <b>{cart.total}</b>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
              disabled={cart.cartItems.length === 0}
            >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
    </div>
  )
}

export default Create