import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { FaPlug, FaWrench, FaChevronRight } from "react-icons/fa6";
import { TbIroningFilled } from "react-icons/tb";
import { GiHandSaw, GiWateringCan } from "react-icons/gi";
import Link from "next/link";

const categories = [
  {
    image: <FaPlug className="w-8 h-8" />,
    title: "Electrician",
    slug: "electrician",
  },
  {
    image: <FaWrench className="w-8 h-8" />,
    title: "Plumber",
    slug: "plumber",
  },
  {
    image: <GiHandSaw className="w-8 h-8" />,
    title: "Carpenter",
    slug: "carpenter",
  },
  {
    image: <TbIroningFilled className="w-8 h-8" />,
    title: "Dry Cleaner",
    slug: "dry-cleaner",
  },
  {
    image: <GiWateringCan className="w-8 h-8" />,
    title: "Gardener",
    slug: "gardener",
  },
];

function Category() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <section className="my-5">
          <h2 className="uppercase text-sm font-bold pb-3">All Categories</h2>
          <ul className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <li
                key={category.title}
                className="border-1.5 border-black rounded-xl bg-black text-zinc-200 text-sm hover:bg-black/90 px-5 py-2"
              >
                <Link
                  href={`category/${category.slug}`}
                  className="flex items-center justify-between"
                >
                  <span className="font-semibold">{category.title}</span>
                  <FaChevronRight className="w-4 h-4" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </MaxWidthWrapper>
    </>
  );
}

export default Category;
