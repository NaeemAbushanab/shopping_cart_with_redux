import React, { useState } from "react";
import CartItemCard from "../components/CartItemCard";
import { useSelector } from "react-redux";
import { selectItemsCartId } from "../features/cart/cartSlice";

function Cart() {
  const [sortingInput, setSortingInput] = useState("");
  const { status, entities } = useSelector(selectItemsCartId);
  if (status == "loading") return "loading...";
  if (entities.length == 0) return "empty";
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-start gap-3 flex-wrap">
        {entities.map((item) => (
          <CartItemCard id={item} key={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
