import React from "react";

const ProductItem = ({ mert }) => {
  return (
    <div className="product-item  border hover:shadow-lg cursor-pointer transition-all select-none">
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
