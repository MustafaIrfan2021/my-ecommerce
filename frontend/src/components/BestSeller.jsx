// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// const BestSeller = () => {
//   const { products } = useContext(ShopContext);
//   const [bestSeller, setBestSeller] = useState([]);

//   useEffect(() => {
//     const bestProduct = products.filter((item) => item.bestseller);
//     setBestSeller(bestProduct.slice(0, 5));
//   }, [products]);

//   return (
//     <div className="my-10">
//       <div className="py-8 text-3xl text-center">
//         <Title text1={"BEST"} text2={"SELLERS"} />
//         <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
//           Our best sellers are a curated selection of top-rated items that have
//           won over shoppers with their quality, style, and value.
//         </p>
//       </div>
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
//         {bestSeller.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSeller;


import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // DEBUG: Is line ko uncomment karke console mein check karein agar phir bhi na dikhe
      // console.log("Products in BestSeller:", products);

      const bestProduct = products.filter((item) => {
        // Ye line check karti hai ke bestseller true hai, "true" string hai, ya number 1 hai
        return item.bestseller === true || item.bestseller === "true" || item.bestseller === 1;
      });

      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Our best sellers are a curated selection of top-rated items that have
          won over shoppers with their quality, style, and value.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
             <p className="text-gray-400">No products marked as Best Seller.</p>
             <p className="text-xs text-gray-500 mt-2">(Check your Admin Panel to mark products as Bestseller)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSeller;