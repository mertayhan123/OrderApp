import React from "react";
import { Button } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="tracking-wide bg-blue-600 text-center py-4 text-white font-bold ">
        Sepetteki Ürünler
      </h2>
      <div>
        <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2">
          <li className="cart-item flex justify-between">
            <div className="flex items-center">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-16 h-16 object-cover rounded-md border-2"
              />
              <div className="flex flex-col ml-2 ">
                <b>Nike</b>
                <span>₺11.00 x 3</span>
              </div>
            </div>

            <div className="flex items-center gap-x-1">
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />
              <span className="">1</span>
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
              />
            </div>
          </li>
          <li className="cart-item flex justify-between">
            <div className="flex items-center">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-16 h-16 object-cover rounded-md border-2"
              />
              <div className="flex flex-col ml-2 ">
                <b>Nike</b>
                <span>₺11.00 x 3</span>
              </div>
            </div>

            <div className="flex items-center gap-x-1">
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />
              <span className="">1</span>
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
              />
            </div>
          </li>{" "}
          <li className="cart-item flex justify-between">
            <div className="flex items-center">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-16 h-16 object-cover rounded-md border-2"
              />
              <div className="flex flex-col ml-2 ">
                <b>Nike</b>
                <span>₺11.00 x 3</span>
              </div>
            </div>

            <div className="flex items-center gap-x-1">
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<PlusCircleOutlined />}
              />
              <span className="">1</span>
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={<MinusCircleOutlined />}
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="cart-totals mt-auto md:mb-0 mb-8">
        <div className="flex justify-between p-2 border-t border-b ">
          <h3>Ara Toplam</h3>
          <h3>₺11.00</h3>
        </div>
        <div className="flex justify-between p-2">
          <h3>KDV %10</h3>
          <h3>₺1.10</h3>
        </div>
        <div className="flex justify-between p-2 border-t">
          <h3>Toplam</h3>
          <h3>₺11.10</h3>
        </div>
        <div className="flex flex-col px-2">
          <Button className="mb-2" type="primary">
            Sipariş Oluştur
          </Button>
          <Button danger>Temizle</Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
