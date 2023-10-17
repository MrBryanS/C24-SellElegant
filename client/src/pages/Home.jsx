import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import React from "react";
import card from "../assets/card.svg";

export default function Home() {
  return (
    <div className="bg-slate-300">
      <div className=" bg-slate-300 h-[835px] w-1/2 justify-center center-accordion">
        <div className="collapse collapse-arrow bg-slate-500">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">Envelope</div>
          <div className="collapse-content">
            <img src={card} alt="A card product" />
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-slate-400">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Lazor Printer
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-slate-500">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Stock Paper</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}
