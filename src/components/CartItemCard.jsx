import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemCart, selectItemsCartId } from "../features/cart/cartSlice";

function CartItemCard({ id }) {
  const product = useSelector((state) => state.cart.entities[id]);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between w-100">
      <img src={product.image} alt="" />
      <div className="d-flex flex-column">
        <h5 className="">{product.name}</h5>
        <span>{product.actual_price}</span>
        <span>{product.no_of_ratings}</span>
      </div>
      <button onClick={() => dispatch(removeItemCart(id))}>X</button>
    </div>
  );
}

export default CartItemCard;
