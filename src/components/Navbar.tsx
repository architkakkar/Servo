"use client";

import Link from "next/link";
import { Luckiest_Guy } from "next/font/google";
import { FaLocationDot, FaChevronDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Separator } from "@/components/ui/separator";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    // sticky navbar feature to be added.
    <header className="sticky inset-0 top-0 z-50 bg-white shadow-xl backdrop-blur-sm transition-all">
      <MaxWidthWrapper className="py-5">
        <nav className="grid grid-cols-navbar-mobile items-center gap-y-4 md:grid-cols-navbar-desktop md:gap-x-4">
          {/* Sidebar - goes here if required */}
          {/* Company Logo */}
          <div className={`${luckiestGuy.className} pr-4`}>
            <Link href={"/"} className="text-4xl">
              Servo
            </Link>
          </div>
          {/* Search Bar */}
          <div className="order-last col-span-2 md:order-none md:col-auto">
            <input
              type="search"
              placeholder="Search for 'Plumber'"
              className="border-1.5 border-zinc-200 outline-none py-2.5 px-3 w-full rounded-xl"
            />
          </div>
          {/* Location */}
          <div className="flex items-center justify-end overflow-hidden">
            <div className="flex items-center gap-x-1 bg-zinc-200 px-2 py-1.5 md:py-3 rounded-xl overflow-hidden border-1.5 border-zinc-200 cursor-pointer">
              <FaLocationDot className="min-w-5 min-h-5 -translate-y-[1px]" />
              <span className="text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis min-w-6">
                Sri Ganganagar
              </span>
              <FaChevronDown className="ml-2 min-w-4 min-h-4" />
            </div>
          </div>
          {/* Account */}
          <div className="hidden md:block bg-zinc-200 cursor-pointer rounded-lg px-2 py-1">
            <div className="flex flex-col items-center justify-center gap-y-[2px]">
              <FaUser className="min-w-5 min-h-5" />
              <span className="text-xs font-semibold">Account</span>
            </div>
          </div>
        </nav>
      </MaxWidthWrapper>
      <Separator />
    </header>
  );
}
