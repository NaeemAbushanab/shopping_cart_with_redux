import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectItemsCartId } from "../features/cart/cartSlice";

function Navbar() {
  const navigate = useNavigate();
  const { entities } = useSelector(selectItemsCartId);
  return (
    <div className="bg-dark p-3 d-flex justify-content-between">
      <span className="text-light" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        {"back"}
      </span>
      <button className="rounded-pill px-4" onClick={() => navigate("/cart")}>
        cart <span className="text-danger fw-bold">{entities.length}</span>
      </button>
    </div>
  );
}

export default Navbar;
