"use client";

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { FaCartShopping, FaUser } from "react-icons/fa6";

function MainMenuButtons() {
  return (
    <section className="bg-white fixed bottom-0 w-full z-50 border-t-1.5 border-black rounded-t-xl md:hidden shadow-menuBtns">
      <ul className="grid grid-cols-4 items-center justify-center py-3">
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-y-1"
          >
            <AiFillHome className="w-6 h-6" />
            <span className="text-xs font-semibold">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="flex flex-col items-center justify-center gap-y-1"
          >
            <FaUser className="w-5 h-5" />
            <span className="text-xs font-semibold translate-y-[2px]">Account</span>
          </Link>
        </li>
        <li>
          <Link
            href="/category"
            className="flex flex-col items-center justify-center gap-y-1"
          >
            <BiSolidCategory className="w-6 h-6" />
            <span className="text-xs font-semibold">Categories</span>
          </Link>
        </li>
        <li>
          <Link
            href="/checkout"
            className="flex flex-col items-center justify-center gap-y-1"
          >
            <FaCartShopping className="w-6 h-6" />
            <span className="text-xs font-semibold">Cart</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default MainMenuButtons;
