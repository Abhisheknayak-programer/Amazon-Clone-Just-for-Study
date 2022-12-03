import React, { useState } from "react";
import Image from "next/image";
import { HiStar } from "react-icons/hi";

const ProductCard = (props) => {
  let ratings = Math.floor(props.product?.rating?.rate);
  const [hasPrime] = useState(Math.random() < 0.5);

  //   console.log(props.product);
  //   console.log(props.product.id);
  //   console.log(props.product.title);
  //   console.log(props.product.price);
  //   console.log(props.product.description);
  //   console.log(props.product.category);
  //   console.log(props.product.image);
  //   console.log(props.product.rating);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {props.product.category}
      </p>
      <Image
        src={props.product.image}
        width={200}
        height={200}
        objectFit="contain"
      />
      <h4 className="my-3">{props.product.title}</h4>
      <div className="flex">
        {Array(ratings)
          .fill(1)
          .map((_, ind) => (
            <HiStar key={ind} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{props.product.description}</p>
      <div className="mb-5">&#8377; {Math.trunc(props.product.price * 30)}</div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime delivery logo"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default ProductCard;
