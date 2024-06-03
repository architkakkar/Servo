"use client";

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { FaHeart, FaUser } from "react-icons/fa6";

function MainMenuButtons() {
  return (
    <section className="bg-white/90 fixed bottom-0 w-full z-50 border-t-1.5 border-black rounded-t-xl md:hidden">
      <ul className="grid grid-cols-4 items-center justify-center py-3">
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-y-1 hover:-translate-y-1 transition-all"
          >
            <AiFillHome className="w-6 h-6" />
            <span className="text-xs font-semibold">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            className="flex flex-col items-center justify-center gap-y-1"
          >
            <BiSolidCategory className="w-6 h-6" />
            <span className="text-xs font-semibold">Categories</span>
          </Link>
        </li>
        <li>
          <Link
            href="/favourites"
            className="flex flex-col items-center justify-center gap-y-1"
          >
            <FaHeart className="w-6 h-6" />
            <span className="text-xs font-semibold">Favourites</span>
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="flex flex-col items-center justify-center gap-y-1"
          >
            <FaUser className="w-6 h-6" />
            <span className="text-xs font-semibold">Account</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default MainMenuButtons;
