import React from "react";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });

function Footer() {
  return (
    <footer className="pb-16 bg-black">
      <div className="text-white bg-black text-sm flex flex-col items-center jusitify-center mb-1 py-4 gap-y-1">
        <p className={`${luckiestGuy.className} text-2xl`}>Servo</p>
        <p>@All Copyrights Reserved - 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
