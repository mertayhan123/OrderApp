import React, { useState } from "react";
import "./style.css";
import { Form, Input, Button, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await fetch("http://localhost:3000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori başarıyla eklendi.");
      form.resetFields();
      setCategories([...categories, values]);
    } catch (error) {
      console.log(error);
      message.error("Bir hata oluştu.");
    }
  };

  return (
    <ul className="flex gap-4 md:flex-col text-lg">
      {categories.map((category) => (
        <li
          key={category._id}
          className="category-item "
        >
          {category.title}
        </li>
      ))}
      <li
        className="category-item !bg-purple-800 hover:opacity-90"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <Modal
        title="Yeni Kategori Ekle"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Kategori Ekle"
            rules={[
              { required: true, message: "Kategori Alanı Boş Geçilemez!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </ul>
  );
};

export default Categories;
