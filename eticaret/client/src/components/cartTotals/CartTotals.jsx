import React from "react";
import { Button } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  decrease,
  deleteCartItem,
  increase,
  reset,
} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-[300px] h-full max-h-[calc(100vh_-_90px)] flex  flex-col bg-[#F6E6CB] rounded-t-2xl">
    <h2 className="tracking-wide bg-[#B6C7AA] text-center py-4 text-[#000000] font-bold rounded-full">
      Sepetteki Ürünler
    </h2>
    <div>
      <ul className="cart-items px-2 flex  gap-y-3 pt-2 overflow-y-auto max-h-[640px] md:flex-col">
        {cart.cartItems.map((item) => (
          <li className="cart-item flex justify-between" key={item._id}>
            <div className="flex items-center">
              <img
                src={item.img}
                alt=""
                className="w-16 h-16 object-cover rounded-md border-2"
                onClick={() => dispatch(deleteCartItem(item))}
              />
              <div className="flex flex-col ml-2 ">
                <b>{item.title}</b>
                <span>
                  {item.price}₺ x {item.sayac}
                </span>
              </div>
            </div>
  
            <div className="flex items-center gap-x-1">
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={
                  <MinusCircleOutlined
                    onClick={() => dispatch(decrease(item))}
                  />
                }
              />
              <span className="font-bold">{item.sayac}</span>
              <Button
                type="primary"
                size="small"
                className="w-full flex items-center justify-center !rounded-full"
                icon={
                  <PlusCircleOutlined
                    onClick={() => dispatch(increase(item))}
                  />
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  
    <div className="cart-totals mt-auto md:mb-0 !mb-3">
      <div className="flex justify-between p-2 border-t border-b ">
        <h3> Toplam</h3>
        <h3>{cart.total.toFixed(2)}₺</h3>
      </div>
  
      <div className="flex flex-col px-2">
        <Button
          className="mb-2 h-12"
          type="primary"
          onClick={() => navigate("/cart")}
          disabled={cart.cartItems.length === 0}
        >
          Sipariş Oluştur
        </Button>
        <Button
          className="h-12"
          danger
          onClick={() => {
            if (window.confirm("Emin Misiniz?")) {
              dispatch(reset());
              message.success("Sepet Başarıyla Temizlendi.");
            }
          }}
        >
          Temizle
        </Button>
      </div>
    </div>
  </div>
  
  );
};

export default CartTotals;
