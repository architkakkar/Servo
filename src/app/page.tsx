"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaPlug, FaWrench } from "react-icons/fa6";
import { TbIroningFilled } from "react-icons/tb";
import { GiHandSaw, GiWateringCan } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import Card from "@/components/Card";

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

const bannerImages = [
  {
    image:
      "https://images.unsplash.com/photo-1716980197259-0777aaa6c094?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1716980197259-0777aaa6c094?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    image:
      "https://images.unsplash.com/photo-1716980197259-0777aaa6c094?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const businessDetails = [
  {
    id: "DURGA01",
    primaryImage:
      "https://images.unsplash.com/photo-1716980197259-0777aaa6c094?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Durga Wire and Electricals",
    type: "Electrician",
    rating: {
      star: 4.9,
      reviews: 103,
    },
    services: ["AC", "Refrigerator", "Washing Machine", "Microwave"],
  },
  {
    id: "SNOWH02",
    primaryImage:
      "https://images.unsplash.com/photo-1716980197259-0777aaa6c094?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Snowhite Dry Cleaners",
    type: "Dry Cleaner",
    rating: {
      star: 4.5,
      reviews: 57,
    },
    services: ["Shirts", "Suit", "Blanket", "Shoes", "Jeans"],
  },
];

export default function Home() {
  return (
    <MaxWidthWrapper>
      <QuickCategoryNavbar />
      <HeroBanner />
      <section className="mt-2 mb-6">
        <p className="uppercase text-sm font-bold pb-4">Top rated near you</p>
        <div className="grid grid-cols-2 gap-4">
          {businessDetails.map((business) => (
            <Card
              key={business.id}
              image={business.primaryImage}
              title={business.title}
              type={business.type}
              stars={business.rating.star}
              reviews={business.rating.reviews}
            />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

function QuickCategoryNavbar() {
  return (
    <section
      style={{ scrollbarWidth: "thin" }}
      className="py-5 flex items-center gap-x-4 overflow-x-scroll"
    >
      {categories.map((category) => (
        <div className="min-w-20 min-h-20 border-1.5 border-black rounded-full flex flex-col items-center justify-center gap-y-1 cursor-pointer shadow-md shadow-zinc-400">
          {category.image}
          <span className="text-[11px] font-semibold">{category.title}</span>
        </div>
      ))}
      <div className="min-w-20 min-h-20 border-1.5 border-black rounded-full flex flex-col items-center justify-center gap-y-1 cursor-pointer shadow-md shadow-zinc-400 text-white bg-black">
        <BiSolidCategory className="w-8 h-8" />
        <span className="text-[11px] font-semibold">Show More</span>
      </div>
    </section>
  );
}

function HeroBanner() {
  return (
    <section className="my-5">
      <Carousel
        className="w-full h-44"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {bannerImages.map((bannerImage, index) => (
            <CarouselItem key={index}>
              <div>
                <img
                  src={bannerImage.image}
                  alt=""
                  className="rounded-3xl w-full h-44 border-2 border-black object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
