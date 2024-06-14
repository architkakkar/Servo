"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FaPlug, FaWrench } from "react-icons/fa6";
import { TbIroningFilled } from "react-icons/tb";
import { GiHandSaw, GiWateringCan } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import Link from "next/link";

const categories = [
  {
    image: <FaPlug className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    title: "Electrician",
    slug: "electrician",
  },
  {
    image: <FaWrench className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
    title: "Plumber",
    slug: "plumber",
  },
  {
    image: (
      <GiHandSaw className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 outline-2" />
    ),
    title: "Carpenter",
    slug: "carpenter",
  },
  {
    image: (
      <TbIroningFilled className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    ),
    title: "Dry Cleaner",
    slug: "dry-cleaner",
  },
  {
    image: (
      <GiWateringCan className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
    ),
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
    price: 200,
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
    price: 150,
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
    price: 150,
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
    price: 150,
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
    price: 150,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <QuickCategoryNavbar />
        <HeroBanner />
        <section className="mt-2 md:mt-6 mb-6">
          <h2 className="uppercase text-sm font-extrabold pb-4">
            Top rated near you
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {businessDetails.map((business) => (
              <Card
                key={business.id}
                image={business.primaryImage}
                title={business.title}
                type={business.type}
                stars={business.rating.star}
                reviews={business.rating.reviews}
                services={business.services}
                price={business.price}
                isFavourite={false}
              />
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}

function QuickCategoryNavbar() {
  return (
    <>
      {/* 
      <section className="flex items-center justify-center">
        <Carousel className="w-10/12">
          <CarouselContent className="flex justify-evenly">
            {categories.map((category) => (
              <CarouselItem
                key={category.title}
                className="basis-1/3 xs:basis-1/4 sm:basis-1/5 md:basis-1/6"
              >
                <div className="min-w-20 min-h-20 md:w-28 md:h-28 border-2 rounded-full flex flex-col items-center justify-center gap-y-1 md:gap-y-3 cursor-pointer shadow-md hover:border-black hover:bg-white/90 hover:shadow-lg my-5">
                  {category.image}
                  <span className="text-xxs md:text-xs font-semibold">
                    {category.title}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section> 
      */}
      <section className="py-5 flex items-center gap-x-4 overflow-x-scroll scrollable-container">
        {categories.map((category) => (
          <Link
            href="/"
            className="min-w-20 min-h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 rounded-full flex flex-col items-center justify-center gap-y-1 md:gap-y-3 cursor-pointer shadow-md hover:border-black hover:bg-white/90 hover:shadow-lg shrink-0"
          >
            {category.image}
            <span className="text-xxs sm:text-xs font-semibold">
              {category.title}
            </span>
          </Link>
        ))}
        <Link
          href="/category"
          className="min-w-20 min-h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-black rounded-full flex flex-col items-center justify-center gap-y-1 md:gap-y-3 cursor-pointer shadow-md text-white bg-black hover:bg-black/90 shrink-0"
        >
          <BiSolidCategory className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <span className="text-xxs sm:text-xs font-semibold">
            All Categories
          </span>
        </Link>
      </section>
    </>
  );
}

function HeroBanner() {
  return (
    <section className="my-5 lg:mt-0">
      <Carousel
        className="w-full h-44 xs:h-52 sm:h-56 md:h-72 lg:h-96"
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
                  className="rounded-3xl w-full h-44 xs:h-52 sm:h-56 md:h-72 lg:h-96 border-2 border-black object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
