import React from "react";
import { Luckiest_Guy } from "next/font/google";
import MaxWidthWrapper from "./MaxWidthWrapper";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

function Footer() {
  return (
    <MaxWidthWrapper className="!px-0">
      <footer className="pb-16 md:pb-2 bg-black">
        <div className="text-white bg-black text-sm flex flex-col items-center jusitify-center mb-1 py-4 md:py-6 gap-y-1">
          <p className={`${luckiestGuy.className} text-2xl md:text-3xl`}>
            Servo
          </p>
          <p>@All Copyrights Reserved - 2024</p>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}

export default Footer;
