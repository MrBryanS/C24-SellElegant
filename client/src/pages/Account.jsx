import card from "../assets/card.svg";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
const products = [
    {
      id: 1,
      name: 'Basic envelope',
      href: '#',
      imageSrc: card,
      imageAlt: "basic Sellelegant envelope.",
      price: '$2.50',
      
    },
    // More products...
  ]
  
  export default function Account() {
    const {loading, data}=useQuery(QUERY_ME)
    const user=data?.me || {}
    console.log(user)
    return (
        <div className="bg-slate-300 min-h-screen">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl bg-slate-400 w-1/8 p-4 text-center border-boldest border-blue-400 border-4 shadow-x1 font-bold tracking-tight text-gray-900">Orders:</h2>
  
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className=" product-element group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-blue-400 lg:aspect-none group-hover:opacity-75 product-element lg:w-80 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

