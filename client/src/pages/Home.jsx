import { Link } from "react-router-dom";
import { QUERY_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import React from "react";
import card from "../assets/card.svg";
import lazerPrinter from "../assets/lazerPrinter.svg"
import job from "../assets/job.svg"

export default function Home() {
  const {loading, data}= useQuery(QUERY_PRODUCTS)
  const products = data?.products || []
  console.log(products)
  return (
    <div className="bg-slate-300">
      <div className=" bg-slate-300 flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="collapse collapse-arrow bg-slate-500">
          <input className="lg:h-32" type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">Job Set-Up</div>
          <div className="collapse-content">
          <img src={job} alt="A card product"/>
            <p>hello</p>
            
          </div>
        </div>
        <div className="collapse collapse-arrow bg-slate-400">
          <input className="lg:h-32" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Laser Personalization - 1 Side
          </div>
          <div className="collapse-content">
          <img src={lazerPrinter} alt="A card product"/>
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-slate-500">
          <input className="lg:h-32" type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Mail Handling</div>
          <div className="collapse-content">
          <img src={card} alt="A card product"/>
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}
