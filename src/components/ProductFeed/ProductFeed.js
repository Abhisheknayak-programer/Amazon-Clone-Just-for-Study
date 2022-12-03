import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const ProductFeed = (props) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {props.products.slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <img
        className="md: col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {props.products.slice(4, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {props.products.slice(5, 15).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <img
        className="md: col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {props.products.slice(15, 16).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {props.products.slice(16, props.products.length).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
