import { Button, Form, Input, message, Modal, Table } from "antd";
import React, { useState } from "react";

const Edit = ({
  isEditModalOpen,
  setIsEditModalOpen,
  categories,
  setCategories,
}) => {
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:3000/api/categories/update-category", {
        method: "PUT",
        body: JSON.stringify({ ...values, categoryId: editingRow._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      message.success("Kategori başarıyla güncellendi.");
      setCategories(
        categories.map((item) => {
          if (item._id === editingRow._id) {
            return { ...item, title: values.title };
          }
          return item;
        })
      );
      setEditingRow(null);
      form.resetFields(); // Formu sıfırla
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (categoryId) => {
   if(window.confirm("Silmek istediğinize emin misiniz?")) {
    try {
      await fetch("http://localhost:3000/api/categories/delete-category", {
        method: "DELETE",
        body: JSON.stringify({ categoryId }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      message.success("Kategori başarıyla silindi.");
      setCategories(categories.filter((item) => item._id !== categoryId));
    } catch (error) {
      console.log(error);
    }
    }
  };

  const columns = [
    {
      title: "Kategori Adı",
      dataIndex: "title",
      render: (_, record) => {
        if (record._id === editingRow?._id) {
          return (
            <Form.Item
              className="mb-0"
              name="title"
              initialValue={record.title}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return record.title;
        }
      },
    },
    {
      title: "İşlemler",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="primary"
              onClick={() => {
                setEditingRow(record);
                form.setFieldsValue({ title: record.title }); // Seçilen satırın değerini form'a ayarla
              }}
            >
              Düzenle
            </Button>
            <Button type="primary" htmlType="submit">
              Kaydet
            </Button>
            <Button type="danger" onClick={() => deleteCategory(record._id)}>
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Modal
      open={isEditModalOpen}
      title="Kategori İşlemleri"
      footer={false}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <Form form={form} onFinish={onFinish}>
        <Table
          bordered
          dataSource={categories}
          columns={columns}
          rowKey={"_id"}
        />
      </Form>
    </Modal>
  );
};

export default Edit;
