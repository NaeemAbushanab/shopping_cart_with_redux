import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductsCard({ id, image, name, actual_price }) {
  const dispatch = useDispatch();
  const handleOnClickAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };
  return (
    <div
      key={id}
      className="border rounded-2 p-3 pb-5 position-relative"
      style={{ width: "250px" }}
    >
      <img src={image} alt={name} className="w-100" />
      <h2 className="fs-5">{name}</h2>
      <div className="d-flex justify-content-between px-2 pb-2 position-absolute bottom-0 start-0 w-100">
        <span>{actual_price}</span>
        <button onClick={() => handleOnClickAddToCart(id)}>+</button>
      </div>
    </div>
  );
}

export default ProductsCard;
