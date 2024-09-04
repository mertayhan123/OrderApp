import React from "react";
import { Modal } from "antd";
import { Button, Card, Form, Input, Select } from "antd";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const PrintBill = ({ isModalOpen, setIsModalOpen, customer }) => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const date = new Date(customer.createdAt).toLocaleDateString("tr-TR");
  
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black" ref={componentRef}>
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold color ">
                {customer.customerName}
              </h2>
            </div>
            <div className="bill-details">
              <div className="grid grid-cols-4 gap-12">
                <div className="text-md color">
                  <p className="font-bold color">Fatura Detayı:</p>
                  <p>Ankara</p>
                  <p> Ankara</p>
                  <p> Ankara </p>
                </div>
                <div className="text-md color">
                  <p className="font-bold color">Fatura:</p>
                  Balıkesir Üniversitesi
                  <p> Altıeylül</p>
                  <p> Altıeylül </p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold color">Fatura numarası:</p>
                    <p>000{Math.floor(Math.random() * 100)}</p>{" "}
                  </div>
                  <div>
                    <p className="font-bold color mt-2">Veriliş Tarihi:</p>
                    <p>{date}</p>{" "}
                  </div>
                </div>
                <div className="text-md color">
                  <div>
                    <p className="font-bold color">Şartlar:</p>
                    <p>12 gün</p>
                  </div>
                  <div>
                    <p className="font-bold color mt-2">Vade:</p>
                    <p>2023-11-21</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      {" "}
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-center text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customer?.cartItems?.map((item) => (

                    <tr className="border-b border-slate-200">
                    <td className="py-4">
                      <span className="font-medium">{item.title}</span>
                    </td>
                    <td className="py-4 text-center">
                      <span>{item.price}₺</span>
                    </td>
                    <td className="py-4 text-center">
                      <span>{item.sayac}</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>{item.sayac * item.price}₺</span>
                    </td>
                  </tr>))}
                </tbody>
                <tfoot>
                 
                 
                  <tr>
                    <th className="text-left pt-4" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Total</span>
                    </th>
                    <th className="text-left pt-4" scope="row">
                      <span className="font-normal text-slate-700">{customer?.subTotal}₺</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam aliquid deserunt libero dolorum, magni commodi
                    eligendi totam accusamus vitae officiis!
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large" onClick={handlePrint}>
          Yazdır
        </Button>
      </div>
    </Modal>
  );
};

export default PrintBill;
