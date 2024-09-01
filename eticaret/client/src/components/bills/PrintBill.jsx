import React from "react";
import { Modal } from "antd";
import { Button, Card, Form, Input, Select } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
 
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold color ">AYHAN</h2>
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
                    <p>00041</p>
                  </div>
                  <div>
                    <p className="font-bold color mt-2">
                      Veriliş Tarihi:
                    </p>
                    <p>2023-09-21</p>
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
                  <tr className="border-b border-slate-200">
                    <td className="py-4">
                      <span className="font-medium">Şalgam</span>
                    </td>
                    <td className="py-4 text-center">
                      <span>5₺</span>
                    </td>
                    <td className="py-4 text-center">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>5.00₺</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-left pt-6" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        Ara Toplam
                      </span>
                    </th>
                    <th className="text-left pt-4" scope="row">
                      <span className="font-normal text-slate-700">61₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-left pt-4" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">KDV</span>
                    </th>
                    <th className="text-left pt-4" scope="row">
                      <span className="font-normal text-slate-700">4.88₺</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-left pt-4" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Total</span>
                    </th>
                    <th className="text-left pt-4" scope="row">
                      <span className="font-normal text-slate-700">65.88₺</span>
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
        <Button type="primary" size="large">
          Yazdır
        </Button>
      </div>
    </Modal>
  );
};

export default PrintBill;
