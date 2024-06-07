"use client";

import { useState } from "react";
import { Luckiest_Guy } from "next/font/google";
import { TbGhost2Filled } from "react-icons/tb";
import Link from "next/link";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

function Checkout() {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  return (
    <>
      {isCartEmpty ? (
        <div
          className={`${luckiestGuy.className} flex items-center justify-center h-[calc(100vh-4rem)] w-full`}
        >
          <div className="text-center text-neutral-600 text-sm uppercase flex items-center justify-center flex-col">
            <TbGhost2Filled className="w-6 h-6 mb-1" />
            <p>NOTHING TO SHOW</p>
            <p>EXPLORE POPULAR SERVICES NOW!</p>
            <Link href="/category">
              <button className="bg-black hover:black/90 text-zinc-200 px-4 py-2 mt-2 rounded-md tracking-wide">
                Explore
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>Not Empty</p>
      )}
    </>
  );
}

export default Checkout;
