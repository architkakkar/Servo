import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { FaUserEdit, FaBoxOpen, FaHeart } from "react-icons/fa";
import {
  FaCircleChevronRight,
  FaAddressBook,
  FaHeadset,
  FaCircleInfo,
} from "react-icons/fa6";
import { MdAddBusiness } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const account = {
  profile: {
    initials: "AK",
    name: "Archit Kakkar",
    mobile: "8003429790",
  },
  settings: [
    {
      logo: <FaBoxOpen className="w-5 h-5" />,
      title: "All Bookings",
      link: "/bookings",
    },
    {
      logo: <FaHeart className="w-5 h-5" />,
      title: "My Favourites",
      link: "/favourites",
    },
    {
      logo: <FaAddressBook className="w-5 h-5" />,
      title: "Saved Addresses",
      link: "/addresses",
    },
    {
      logo: <MdAddBusiness className="w-5 h-5" />,
      title: "Register your Business",
      link: "/business/signup",
    },
    {
      logo: <FaHeadset className="w-5 h-5" />,
      title: "Help Center",
      link: "/help-center",
    },
    {
      logo: <FaCircleInfo className="w-5 h-5" />,
      title: "About Servo",
      link: "/about-us",
    },
  ],
};

export default function Account() {
  return (
    <MaxWidthWrapper className="my-5 pb-16">
      {/* Customer Profile */}
      <div className="px-6 py-3 flex items-center justify-start gap-x-8 rounded-2xl shadow-profile bg-[#ececec] mb-6">
        <div className="border-1.5 border-black rounded-xl px-3 py-4 bg-[#EEEEEE]">
          <p className="text-4xl uppercase font-extrabold">
            {account.profile.initials}
          </p>
        </div>
        <div className="">
          <p className="font-bold text-xl">{account.profile.name}</p>
          <p className="font-semibold text-sm">{`+91 ${account.profile.mobile}`}</p>
          <Link
            href={"/edit-profile"}
            className="flex items-center font-medium hover:underline text-sm mt-1 gap-x-2 text-[#444444] hover:text-black"
          >
            <span>Edit Profile</span>
            <FaUserEdit className="w-4 h-4" />
          </Link>
        </div>
      </div>
      {/*  */}
      <section className="mb-10">
        <h2 className="uppercase text-sm font-bold pb-3">my account</h2>
        <ul className="flex flex-col gap-y-4">
          {account.settings.map((setting) => (
            <li
              key={setting.title}
              className="border-1.5 border-black rounded-lg hover:bg-zinc-200/80"
            >
              <Link
                href={setting.link}
                className="font-bold px-6 py-3 flex justify-between items-center"
              >
                <div className="flex gap-x-4 items-center">
                  {setting.logo}
                  <span>{setting.title}</span>
                </div>
                <FaCircleChevronRight className="w-5 h-5" />
              </Link>
            </li>
          ))}
          <li className="border-1.5 rounded-lg bg-red-100 text-red-600 border-red-600 cursor-pointer hover:bg-red-200/80">
            <div className="font-bold flex justify-between items-center px-6 py-3">
              <div className="flex gap-x-3 items-center">
                <TbLogout className="w-6 h-6" />
                <span>Log out</span>
              </div>
              <FaCircleChevronRight className="w-5 h-5" />
            </div>
          </li>
        </ul>
      </section>
    </MaxWidthWrapper>
  );
}
