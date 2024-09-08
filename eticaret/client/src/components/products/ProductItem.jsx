import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { message } from "antd";

const ProductItem = ({ mert }) => {


  const dispatch = useDispatch();

  const handleClicked = () => {
  dispatch(addProduct({...mert,sayac: 1 }));
  message.success(`${mert.title} sepete eklendi`);
  }  

  return (
    <div className=" border-2 border-[#B6C7AA] hover:shadow-2xl cursor-pointer transition-all select-none bg-[#E7D4B5] raise" onClick={handleClicked}>
      <div className="product-img">
        <img
          className="h-28 object-cover w-full border-b"
          src={mert.img}
          alt=""
        />
      </div>
      <div className="product-info flex flex-col p-3 bg">
        <span>{mert.title}</span>

        <span>{mert.price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;
