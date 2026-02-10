import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
  if (products && Array.isArray(products) && products.length > 0) {
    const bestProduct = products.filter((item) => {
      if (!item) return false;
      const val = item.bestSeller ?? item.bestseller; 
      return val === true || val === "true";
    });
    setBestSeller(bestProduct.reverse().slice(0, 10));
  }
}, [products]);
  

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-center">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base">
          Our best sellers are a curated selection of top-rated items.
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
          <p className="col-span-full text-center text-gray-500">No Bestsellers found.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;