import Link from "next/link";
import React from "react";
import { CgCloseO } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";

function page() {
  const bookingId: number = 1;
  return (
    <div className="relative z-50 w-full h-screen bg-black text-white">
      <Link href="/" className="absolute top-6 right-6 cursor-pointer">
        <CgCloseO className="text-white w-7 h-7" />
      </Link>
      <div className="flex items-center justify-center h-full pb-16">
        <div className="border-2 border-green-300/95 rounded-xl p-10 flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <FaCircleCheck className="text-green-200 border-green-600 bg-green-600 rounded-full w-10 h-10" />
          <div className="text-center text-green-300/95">
            <p>Thank You!</p>
            <p>Your Booking has been confirmed</p>
          </div>
        </div>
      </div>
      <p className="text-white/75 absolute right-1/2 translate-x-1/2 bottom-24 md:bottom-10 font-mono text-sm ">
        Booking Id: <span className="text-white font-bold">{bookingId}</span>
      </p>
    </div>
  );
}

export default page;
