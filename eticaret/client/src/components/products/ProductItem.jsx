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
    <div className="product-item  border hover:shadow-lg cursor-pointer transition-all select-none" onClick={handleClicked}>
      <div className="product-img">
        <img
          className="h-28 object-cover w-full border-b"
          src={mert.img}
          alt=""
        />
      </div>
      <div className="product-info flex flex-col p-3">
        <span>{mert.title}</span>

        <span>{mert.price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;
