"use client";

import { useState } from "react";
import { Luckiest_Guy } from "next/font/google";
import { TbGhost2Filled } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { FaRupeeSign, FaStar } from "react-icons/fa6";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Separator } from "@/components/ui/separator";
import { GoDotFill } from "react-icons/go";
import { CgCloseO } from "react-icons/cg";
import Footer from "@/components/Footer";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

const business = {
  id: "ELEC001",
  primaryImage: "https://via.placeholder.com/400x300?text=Electrician",
  title: "Best Electric Solutions",
  type: "Electrician",
  rating: {
    star: 4.9,
    reviews: 123,
  },
  price: 125,
  services: ["AC", "Refrigerator", "Washing Machine", "Microwave"],
};

function Checkout() {
  const [isCartEmpty, setIsCartEmpty] = useState(false);

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
    <>
      <Navbar className="hidden md:block" />
      {isCartEmpty ? (
        <div
          className={`${luckiestGuy.className} flex items-center justify-center h-[calc(100vh-4rem)] w-full`}
        >
          <div className="text-center text-zinc-600/75 text-sm uppercase flex items-center justify-center flex-col">
            <TbGhost2Filled className="w-8 h-8 mb-1" />
            <p className="uppercase">Nothing to show</p>
            <p className="uppercase">Explore popular services now!</p>
            <Link href="/category">
              <button className="bg-black hover:bg-black/90 text-zinc-200 px-4 py-2 mt-2 rounded-md tracking-wide">
                Explore
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <MaxWidthWrapper className="py-10 pb-20">
            <div className="flex justify-between center space-x-4 px-32">
              {/* location and payment details */}
              <div className="flex flex-col gap-y-10">
                {/* location */}
                <div className="font-semibold text-sm shadow-lg min-w-96">
                  <p className="font-bold px-1 pb-1">Address</p>
                  <div className="border-2 border-black  px-4 py-4 rounded-xl">
                    <div className="flex items-center gap-x-4">
                      <div className="bg-zinc-200 border p-3.5 rounded-full">
                        <IoHome className="w-8 h-8" />
                      </div>
                      <div className="">
                        <p className="">50, Ganpati Nagar, Street No. 3</p>
                        <p className="">Sri Ganganagar, Rajasthan - 335001</p>
                        <p className="">Mob. 8003429790</p>
                      </div>
                    </div>
                    <div className="flex justify-end hover:underline pt-3 text-gray-500 hover:text-black">
                      <button className="text-xs">Change Address</button>
                    </div>
                  </div>
                </div>
                {/* service detail */}
                <div className="font-semibold text-sm shadow-lg min-w-96">
                  <p className="font-bold px-1 pb-1">Vendor Details</p>
                  <div className="border-2 border-black  px-4 py-4 rounded-xl relative">
                    <div className="absolute top-2 right-2 cursor-pointer hover:text-red-500">
                      <CgCloseO className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-x-4">
                      {/* Image */}
                      <div className="rounded-lg">
                        <img
                          src={business.primaryImage}
                          className="w-24 h-24 object-cover rounded-lg"
                          alt=""
                        />
                      </div>
                      <div className="">
                        {/* Title */}
                        <p className="text-lg font-bold">{business.title}</p>
                        {/* Star and Rating */}
                        <div className="flex items-center justify-start text-xs font-semibold gap-x-1 pt-0.5">
                          <div className="flex justify-center items-center bg-black text-zinc-200 px-1.5 py-0.5 rounded-md gap-x-1">
                            <FaStar className="w-4 h-4 -translate-y-[0.5px]" />
                            <span>{business.rating.star}</span>
                          </div>
                          <GoDotFill className="w-3 h-3" />
                          <span className="whitespace-nowrap overflow-hidden text-ellipsis">{`${business.rating.reviews} Reviews`}</span>
                        </div>
                        {/* Popular Services Offered */}
                        <div className="overflow-hidden pt-1.5">
                          <p className="whitespace-nowrap text-xs text-zinc-600 overflow-hidden text-ellipsis">
                            {printServices(business.services)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* payment */}
              <div className="border-pink-400 shadow-lg rounded-xl h-fit">
                {/* Payment */}
                <div className="font-semibold text-sm rounded-xl shadow-lg min-w-96">
                  <p className="font-bold px-1 pb-1">Payment</p>
                  <div className="border-2 border-black  px-4 py-4 rounded-xl">
                    <div className="flex items-start gap-x-8">
                      <div className="bg-zinc-200 border p-4 rounded-full">
                        <FaRupeeSign className="w-8 h-8" />
                      </div>
                      <div className="pt-1">
                        <p>
                          Payment Mode:{" "}
                          <span className="text-gray-500 pl-3.5">Cash</span>
                        </p>
                        <Separator className="mt-4 bg-zinc-300" />
                        <Separator className="mb-4 bg-zinc-300" />
                        <table>
                          <tr>
                            <td>Cart Total:</td>
                            <td className="text-gray-500 pl-8">Rs. 125</td>
                          </tr>
                          <tr>
                            <td>Platform Fee:</td>
                            <td className="text-gray-500 pl-8">Rs. 5</td>
                          </tr>
                          <tr>
                            <td>GST (3.6%): </td>
                            <td className="text-gray-500 pl-8">Rs. 4.68</td>
                          </tr>
                        </table>
                        <Separator className="mt-4 bg-zinc-300" />
                        <Separator className="mb-4 bg-zinc-300" />
                        <table>
                          <tr className="text-xl">
                            <td className="font-black">Total:</td>
                            <td className="font-semibold text-gray-500 pl-16">
                              Rs. 134.68
                            </td>
                          </tr>
                        </table>
                        <Separator className="mt-4 bg-zinc-300" />
                        <Separator className="mb-2 bg-zinc-300" />
                        <div className="text-xs">
                          If you agree, please click on the <br /> below button.
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center bg-black py-2.5 rounded-lg text-white cursor-pointer hover:bg-black/90 mt-8">
                      <Link href={"/order-confirmation"} className="">
                        Confirm Booking
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <Footer />
        </>
      )}
    </>
  );
}

export default Checkout;
