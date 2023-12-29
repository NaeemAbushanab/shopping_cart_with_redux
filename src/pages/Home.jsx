import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ProductsCard from "../components/ProductsCard";
import { useSelector } from "react-redux";
import { selectItemsCartId } from "../features/cart/cartSlice";
function Home() {
  const { data, isLoading } = useQuery("data", () =>
    axios.get("/api/data").then(({ data }) => data)
  );
  const { status } = useSelector(selectItemsCartId);
  if (isLoading || status == "loading") return "loading...";
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-start gap-3 flex-wrap">
        {data.map((product) => (
          <ProductsCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
