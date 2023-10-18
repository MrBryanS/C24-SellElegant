import card from "../assets/card.svg";
import { QUERY_ME } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { REMOVE_ORDER } from "../utils/mutations";

var n = 1;

export default function Account() {
  const { loading, data } = useQuery(QUERY_ME);
  const [deleteOrder] = useMutation(REMOVE_ORDER)
  const handleDeleteOrder = async () => {
    let order = document.querySelector(".deleteButton")
    let orderId = order.id
    console.log(orderId)
    console.log(order)
    try {
      await deleteOrder({
        variables: {orderId}
      })
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className="bg-slate-300 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl bg-slate-400 w-1/8 p-4 text-center border-boldest border-blue-400 border-4 shadow-x1 font-bold tracking-tight text-gray-900">
          Orders:
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data &&
            data.me.savedOrders.map((order) => {
              return (
                <ul key={order._id} className="text-gray-900">
                  <div className="flex justify-between">
                    <h1 className="text-2xl">Order {n++}</h1>
                    <button id={order._id} onClick={() => handleDeleteOrder()} className="deleteButton btn btn-xs">Delete</button>
                  </div>

                  {order.products.map((product) => {
                    return <li key={product._id}>{product.productName}</li>;
                  })}
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
}
