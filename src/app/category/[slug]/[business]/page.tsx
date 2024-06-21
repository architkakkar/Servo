"use client";

import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { GoDotFill } from "react-icons/go";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface BusinessTypeProps {
  params: { slug: string };
}

const business = {
  id: "ELEC001",
  primaryImage: "https://via.placeholder.com/400x300?text=Electrician",
  title: "Best Electric Solutions",
  type: "Electrician",
  rating: {
    star: 4.9,
    reviews: 123,
  },
  services: [
    "Light Installation",
    "Outlet Repair",
    "Circuit Breaker Replacement",
  ],
  price: 125,
};

export default function Business({ params }: BusinessTypeProps) {
  return (
    <>
      <MaxWidthWrapper className="py-5">
        <div className="flex justify-between items-center">
          <Link
            href="./"
            className="flex gap-x-1 justify-center items-center hover:underline font-semibold text-base text-black hover:bg-zinc-100 p-1 px-2 rounded-md"
          >
            <FaChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <div className="hover:bg-zinc-100 cursor-pointer p-2 rounded-md">
            <FaEllipsisVertical className="w-5 h-5" />
          </div>
        </div>
        {/* Important Info */}
        <section className="mt-4 md:mt-6 flex flex-col md:flex-row md:gap-x-6 lg:gap-x-20 relative">
          {/* Images */}
          <div className="md:w-1/2">
            {/* Primary Images */}
            <img
              src={business.primaryImage}
              alt="image"
              className="rounded-lg w-full object-cover h-48 sm:h-52 lg:h-60"
            />
            {/* Other Images */}
            <div className="flex space-x-2 mt-2">
              <img
                src={business.primaryImage}
                alt="image"
                className="rounded-sm object-cover h-16 w-16 border-2 hover:border-black cursor-pointer"
              />
              <img
                src={business.primaryImage}
                alt="image"
                className="rounded-sm object-cover h-16 w-16 border-2 hover:border-black cursor-pointer"
              />
              <img
                src={business.primaryImage}
                alt="image"
                className="rounded-sm object-cover h-16 w-16 border-2 hover:border-black cursor-pointer"
              />
            </div>
          </div>
          {/* Title, Fav, Reviews & Button */}
          <div className="flex-grow">
            {/* Title and Fav Tag */}
            <div className="flex items-center justify-between space-x-10 mt-4 md:mt-0 mb-2 md:mb-4">
              <h1 className="text-2xl font-bold leading-6">{business.title}</h1>
              <div className="border-red-600 bg-red-200/80 text-red-600 border-1.5 rounded-full flex items-center px-2 py-0.5 space-x-1 text-sm">
                <span>Favourite</span>
                <IoMdHeartEmpty className="h-5 w-5" />
              </div>
            </div>
            {/* Stars & Reviews */}
            <div className="flex items-center justify-start text-xs font-semibold gap-x-1">
              <div className="flex justify-center items-center bg-black text-zinc-200 px-1.5 py-0.5 rounded-md gap-x-1">
                <FaStar className="w-4 h-4 -translate-y-[0.5px]" />
                <span>{business.rating.star}</span>
              </div>
              <GoDotFill className="w-3 h-3" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis text-sm">{`${business.rating.reviews} Reviews`}</span>
            </div>
            {/* Price */}
            <div
              className={`${poppins.className} font-extrabold text-2xl my-2.5`}
            >{`Rs. ${business.price}/-`}</div>
            {/* Book Now Button */}
            <Link href={"/checkout"} className="flex">
              <div className="bg-black text-zinc-200 font-bold capitialize rounded-lg w-full flex items-center justify-center text-sm hover:opacity-90 md:mt-5">
                <div className="text-base text-center py-2.5">Book Now</div>
              </div>
            </Link>
          </div>
        </section>
        {/* Popular Services */}
        <div className="font-bold mt-8">
          <p className="text-lg">Popular Service Offered</p>
          <div className="flex gap-3 flex-wrap mt-2">
            {business.services.map((service) => (
              <p
                key={business.id}
                className="bg-black text-white rounded-sm py-1 px-1.5 ring-2 ring-offset-1 ring-black text-sm font-medium"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
        {/* Rating & Reviews */}
        <div className="font-bold mt-8">
          <p className="text-lg">Rating & Reviews</p>
          <div className="mt-2 flex">
            {/* Rating and Total Reviews */}
            <div className="border-r-1.5 pr-4">
              <div className="flex items-center text-3xl space-x-2">
                <span>{business.rating.star}</span>{" "}
                <FaStar className="-translate-y-[1px]" />
              </div>
              <p className="mt-1 text-sm">{`${business.rating.reviews} Reviews`}</p>
            </div>
            {/* All Customer Reviews */}
            <div className="pl-4 w-full flex flex-col gap-y-2">
              {/* Review Card */}
              <div className="border-1.5 border-zinc-200 rounded-xl p-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-zinc-200 mr-2" />
                  <div className="text-sm">Archit Kakkar</div>
                </div>
                <p className="text-sm mt-2 font-normal">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                </p>
              </div>
              <div className="border-1.5 border-zinc-200 rounded-xl p-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-zinc-200 mr-2" />
                  <div className="text-sm">Archit Kakkar</div>
                </div>
                <p className="text-sm mt-2 font-normal">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                </p>
              </div>
              {/* Check All Reviews Button */}
              <div className="font-semibold text-sm flex items-center gap-x-1 hover:underline cursor-pointer mt-1">
                Read More
                <FaChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
        {/* Write a review */}
        <div className="font-bold mt-8">
          <p className="text-lg">Write a review</p>
          <div className="text-base mt-2 flex space-x-4">
            <input
              type="text"
              placeholder="Add a review"
              className="font-medium outline-none border-b-1.5 flex-grow focus:border-b-black"
            />
            <IoSend className="w-5 h-5" />
          </div>
        </div>
        {/* About Vendor */}
        <div className="font-bold mt-8">
          <p className="text-lg">About Vendor</p>
          <div className="text-sm mt-2">
            <p>
              Vendor Id:{" "}
              <span className="font-normal lowercase">{business.id}</span>
            </p>
            <p>
              Address:{" "}
              <span className="font-normal capitalize">
                ABC Shopping Complex, New Delhi, 1000231, India
              </span>
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
