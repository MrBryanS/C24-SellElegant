import { Link } from "react-router-dom";
import { QUERY_PRODUCTS, QUERY_ME } from "../utils/queries";
import { ADD_ORDER } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import card from "../assets/card.svg";
import lazerPrinter from "../assets/lazerPrinter.svg";
import job from "../assets/job.svg";

var n = 1;
export default function Home() {
  const [addOrder, { error}] = useMutation(ADD_ORDER);

  const createOrder = async () => {
    const userEmail = userQuery.data.me.email;
    const todaysDate = "10/19/2023";
    const orderShipped = false;
    console.log(userEmail)
    try {
      await addOrder({
        variables: { email: userEmail, orderDate: todaysDate, orderShipped },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addProduct = async () => {

  }

  const userQuery = useQuery(QUERY_ME);
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  console.log(products);
  console.log(userQuery);
  return (
    <div className="bg-slate-300">
      <div className=" bg-slate-300 flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <button onClick={() => createOrder()} className="btn">
          Create Order
        </button>
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
                <button
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Add
                </button>

                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    {userQuery.data &&
                      userQuery.data.me.savedOrders.map((order) => {
                        return <button onClick={addProduct} key={order._id}>Order {n++}</button>;
                      })}
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
