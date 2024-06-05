import React from "react";
import ServiceTag from "./ServiceTag";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

interface CardProps {
  title: string;
  image: string;
  type: string;
  stars: number;
  reviews: number;
}

function Card({ title, image, type, stars, reviews }: CardProps) {
  return (
    <div className="w-full rounded-2xl hover:">
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
      <div className="overflow-hidden">
        <h1 className="">{title}</h1>
      </div>
    </div>
  );
}

export default Card;
