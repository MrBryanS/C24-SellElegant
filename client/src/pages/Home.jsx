import { Link } from "react-router-dom";
import { QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import React from "react";
import card from "../assets/card.svg";
import lazerPrinter from "../assets/lazerPrinter.svg";
import job from "../assets/job.svg";

export default function Home() {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  console.log(products);
  return (
    <div className="bg-slate-300">
      <div className=" bg-slate-300 flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="collapse collapse-arrow bg-slate-500 my-1"
          >
            <input className="lg:h-32" type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              {product.productName}
            </div>
            <div className="collapse-content">
              <img src={job} alt="A card product" />
              <div className="flex justify-between">
                <p>{product.productDescription}</p>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
