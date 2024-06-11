import React from "react";
import ServiceTag from "./ServiceTag";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

interface CardProps {
  title: string;
  image: string;
  type: string;
  stars: number;
  reviews: number;
  services: string[];
  price: number;
}

function Card({
  title,
  image,
  type,
  stars,
  reviews,
  services,
  price,
}: CardProps) {
  const printServices = (services: string[]) => {
    const len = services.length;
    let servicesString = "";

    for (let i = 0; i < len; i++) {
      if (i === len - 1) servicesString += services[i];
      else servicesString += `${services[i]}, `;
    }

    return servicesString;
  };

  return (
    <div className="w-full rounded-2xl border hover:border hover:border-zinc-400 hover:shadow-md cursor-pointer">
      {/* Special Tags */}
      <div className="hidden">
        <div className="flex item-center justify-center bg-black text-zinc-200 rounded-t-2xl py-0.5">
          <span className="font-bold text-[10px] uppercase tracking-wider">
            NEW
          </span>
        </div>
      </div>
      {/* Image, Type tag & Fav Icon  */}
      <div className="h-32 bg-zinc-200 rounded-2xl relative shadow-md shadow-zinc-700">
        <img
          src={image}
          alt="business-image"
          className="h-full w-full rounded-2xl"
        />
        <ServiceTag businessType={type} />
        <div className="absolute top-2 right-2 cursor-pointer">
          <IoHeartOutline className="h-6 w-6" />
        </div>
      </div>
      {/* Busin ess Description */}
      <div className="p-3 flex flex-col justify-between relative">
        <div className="overflow-hidden flex flex-col gap-y-1 grow h-full">
          {/* Business Name */}
          <h1 className="font-extrabold text-[15px] mb-0.5 leading-snug">
            {title}
          </h1>
          {/* Stars & Reviews */}
          <div className="flex items-center justify-start text-xs font-semibold gap-x-1">
            <div className="flex justify-center items-center bg-black text-zinc-200 px-1.5 py-0.5 rounded-md gap-x-1">
              <FaStar className="w-4 h-4 -translate-y-[0.5px]" />
              <span>{stars}</span>
            </div>
            <GoDotFill className="w-3 h-3" />
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">{`${reviews} Reviews`}</span>
          </div>
          {/* Popular Services Offered */}
          <div className="overflow-hidden">
            <p className="whitespace-nowrap text-xs text-zinc-600 overflow-hidden text-ellipsis">
              {printServices(services)}
            </p>
          </div>
          {/* Price */}
          <div className="font-extrabold text-xl mt-0.5 mb-2 font-sans">{`Rs. ${price}/-`}</div>
          {/* Book Now Button */}
        </div>
        <Link href={"/"} className="flex-">
          <div className="bg-black text-zinc-200 font-bold capitialize rounded-lg w-full flex items-center justify-center text-sm hover:opacity-90">
            <button className="text-center py-2">Book Now</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
