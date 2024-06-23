"use client";

import Link from "next/link";
import { Luckiest_Guy } from "next/font/google";
import {
  FaLocationDot,
  FaChevronDown,
  FaChevronUp,
  FaCartShopping,
} from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    "Search for 'Plumber'",
    "Search for 'Electrician'",
    "Search for 'Gardener'",
    "Search for 'Carpenter'",
    // Add more placeholders as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000); // Change placeholder every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [placeholders.length]);

  return (
    <MaxWidthWrapper
      className={cn(
        "py-5 sticky inset-0 top-0 z-50 text-black bg-white shadow-md shadow-zinc-200 transition-all rounded-b-md",
        className
      )}
    >
      <header>
        <nav className="grid grid-cols-navbar-mobile items-center gap-y-4 md:grid-cols-navbar-desktop md:gap-x-4">
          {/* Company Logo */}
          <div className={`${luckiestGuy.className} pr-4 md:pr-2`}>
            <Link href={"/"} className="text-4xl">
              Servo
            </Link>
          </div>
          {/* Search Bar */}
          <div className="order-last col-span-2 md:order-none md:col-auto">
            <div
              className={`relative flex items-center border-2 rounded-xl py-2.5 px-3 space-x-3 ${
                isFocused && "border-black"
              }`}
            >
              <GoSearch
                className={`w-5 h-5 ${
                  searchText.length > 0 ? "text-black" : "text-zinc-300"
                }`}
              />
              <input
                type="text"
                placeholder={placeholders[placeholderIndex]}
                className="rounded-r-xl outline-none w-full font-semibold placeholder:font-normal"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center justify-end overflow-hidden transition-all">
            <div
              className={`flex items-center justify-between px-2 md:px-3 py-1.5 md:py-3 rounded-xl overflow-hidden border-2 cursor-pointer hover:border-black md:min-w-36 lg:min-w-48 shadow-input ${
                showLocationDropdown && "z-[100]"
              }`}
              onClick={() => setShowLocationDropdown((prev) => !prev)}
            >
              <div className="flex items-center gap-x-2">
                <FaLocationDot className="min-w-5 min-h-5 -translate-y-[1px]" />
                <span className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis min-w-6 md:text-xbase">
                  Sri Ganganagar
                </span>
              </div>
              {showLocationDropdown ? (
                <FaChevronUp className="ml-4 min-w-4 min-h-4" />
              ) : (
                <FaChevronDown className="ml-4 min-w-4 min-h-4" />
              )}
            </div>
            {showLocationDropdown && (
              <>
                <div className="fixed inset-0 h-screen w-full bg-white/75 z-[50]" />
                <div className="absolute top-[4.75rem] right-5 min-w-[17.5rem] h-80 bg-white transition-all rounded-xl z-[100] shadow-profile md:right-48 md:top-20">
                  {/* Location change logic and UI goes here. */}
                </div>
              </>
            )}
          </div>
          {/* Account */}
          <Link
            href="/account"
            className="hidden md:block cursor-pointer rounded-xl px-2 py-1 shadow-input border-2 hover:border-black"
          >
            <div className="flex flex-col items-center justify-center gap-y-[2px]">
              <FaUser className="min-w-5 min-h-5" />
              <span className="text-xxs font-semibold">Account</span>
            </div>
          </Link>
          {/* Cart */}
          <Link
            href="/checkout" 
            className="hidden md:block cursor-pointer rounded-xl px-2 py-1 shadow-input border-2 hover:border-black w-16">
            <div className="flex flex-col items-center justify-center gap-y-[2.5px]">
              <FaCartShopping className="min-w-5 min-h-5" />
              <span className="text-xxs font-semibold">Cart</span>
            </div>
          </Link>
        </nav>
      </header>
    </MaxWidthWrapper>
  );
}
