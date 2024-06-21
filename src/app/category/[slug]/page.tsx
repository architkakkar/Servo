"use client";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

interface CategoryTypeProps {
  params: { slug: string };
}

const businessDetails = [
  {
    id: "ELEC001",
    primaryImage: "https://via.placeholder.com/400x300?text=Electrician",
    title: "Best Electric Solutions",
    type: "Electrician",
    rating: {
      star: 4.9,
      reviews: 123,
    },
    services: [
      "Light Installation",
      "Outlet Repair",
      "Circuit Breaker Replacement",
    ],
    price: 125,
  },
  {
    id: "PLUM002",
    primaryImage: "https://via.placeholder.com/400x300?text=Plumber",
    title: "Plumbing Masters",
    type: "Plumber",
    rating: {
      star: 4.7,
      reviews: 89,
    },
    services: ["Pipe Repair", "Toilet Installation", "Water Heater Service"],
    price: 150,
  },
  {
    id: "CARP003",
    primaryImage: "https://via.placeholder.com/400x300?text=Carpenter",
    title: "Woodworks Craftsmanship",
    type: "Carpenter",
    rating: {
      star: 4.8,
      reviews: 76,
    },
    services: ["Custom Furniture", "Door Installation", "Deck Construction"],
    price: 200,
  },
  {
    id: "DRYCLEAN004",
    primaryImage: "https://via.placeholder.com/400x300?text=DryCleaner",
    title: "Neat & Clean Laundry",
    type: "Dry Cleaner",
    rating: {
      star: 4.6,
      reviews: 65,
    },
    services: ["Shirt Cleaning", "Blouse Steam", "Leather Garment Care"],
    price: 100,
  },
  {
    id: "GARDEN005",
    primaryImage: "https://via.placeholder.com/400x300?text=Gardener",
    title: "Green Thumb Gardening",
    type: "Gardener",
    rating: {
      star: 4.5,
      reviews: 54,
    },
    services: ["Lawn Mowing", "Plant Pruning", "Garden Design"],
    price: 175,
  },
  {
    id: "ELEC006",
    primaryImage: "https://via.placeholder.com/400x300?text=Electrician",
    title: "Quick Fix Electric",
    type: "Electrician",
    rating: {
      star: 4.8,
      reviews: 72,
    },
    services: [
      "Appliance Repair",
      "Light Fixture Installation",
      "Panel Upgrade",
    ],
    price: 130,
  },
  {
    id: "PLUM007",
    primaryImage: "https://via.placeholder.com/400x300?text=Plumber",
    title: "Plumb Perfect",
    type: "Plumber",
    rating: {
      star: 4.9,
      reviews: 101,
    },
    services: [
      "Septic Tank Service",
      "Sink Installation",
      "Pipe Leak Detection",
    ],
    price: 140,
  },
  {
    id: "CARP008",
    primaryImage: "https://via.placeholder.com/400x300?text=Carpenter",
    title: "Crafted Wood Creations",
    type: "Carpenter",
    rating: {
      star: 4.7,
      reviews: 83,
    },
    services: [
      "Wooden Furniture Restoration",
      "Window Frame Repair",
      "Custom Cabinets",
    ],
    price: 195,
  },
  {
    id: "DRYCLEAN009",
    primaryImage: "https://via.placeholder.com/400x300?text=DryCleaner",
    title: "Sparkling Clean Dry Cleaners",
    type: "Dry Cleaner",
    rating: {
      star: 4.5,
      reviews: 61,
    },
    services: [
      "Delicate Garments Cleaning",
      "Upholstery Cleaning",
      "Rug Cleaning",
    ],
    price: 105,
  },
  {
    id: "GARDEN010",
    primaryImage: "https://via.placeholder.com/400x300?text=Gardener",
    title: "Nature's Touch Lawn Care",
    type: "Gardener",
    rating: {
      star: 4.4,
      reviews: 58,
    },
    services: ["Tree Trimming", "Mulching", "Irrigation System Installation"],
    price: 165,
  },
  {
    id: "ELEC011",
    primaryImage: "https://via.placeholder.com/400x300?text=Electrician",
    title: "Power Up Electric",
    type: "Electrician",
    rating: {
      star: 4.7,
      reviews: 87,
    },
    services: [
      "Ceiling Fan Installation",
      "Smoke Detector Placement",
      "Wireless Security Camera Installation",
    ],
    price: 135,
  },
  {
    id: "PLUM012",
    primaryImage: "https://via.placeholder.com/400x300?text=Plumber",
    title: "Plumbers Union",
    type: "Plumber",
    rating: {
      star: 4.8,
      reviews: 79,
    },
    services: [
      "Garbage Disposal Repair",
      "Water Softener Installation",
      "Roof Drain Cleaning",
    ],
    price: 145,
  },
  {
    id: "CARP013",
    primaryImage: "https://via.placeholder.com/400x300?text=Carpenter",
    title: "Handcrafted Carpentry",
    type: "Carpenter",
    rating: {
      star: 4.6,
      reviews: 67,
    },
    services: ["Woodworking Projects", "Home Renovation", "Custom Shelving"],
    price: 190,
  },
  {
    id: "DRYCLEAN014",
    primaryImage: "https://via.placeholder.com/400x300?text=DryCleaner",
    title: "Fashion Forward Dry Cleaners",
    type: "Dry Cleaner",
    rating: {
      star: 4.5,
      reviews: 62,
    },
    services: ["Designer Garments Cleaning", "Tailoring", "Laundry Service"],
    price: 110,
  },
  {
    id: "GARDEN015",
    primaryImage: "https://via.placeholder.com/400x300?text=Gardener",
    title: "Flora & Fauna Landscaping",
    type: "Gardener",
    rating: {
      star: 4.4,
      reviews: 59,
    },
    services: ["Landscaping Design", "Tree Planting", "Soil Preparation"],
    price: 170,
  },
  {
    id: "ELEC016",
    primaryImage: "https://via.placeholder.com/400x300?text=Electrician",
    title: "Bright Ideas Electric",
    type: "Electrician",
    rating: {
      star: 4.7,
      reviews: 88,
    },
    services: [
      "LED Lighting Installation",
      "Smart Home Automation",
      "Energy-Efficient Appliance Installation",
    ],
    price: 120,
  },
  {
    id: "PLUM017",
    primaryImage: "https://via.placeholder.com/400x300?text=Plumber",
    title: "Plumbing Perfection",
    type: "Plumber",
    rating: {
      star: 4.8,
      reviews: 81,
    },
    services: [
      "Water Heater Installation",
      "Sewer Line Inspection",
      "Backflow Testing",
    ],
    price: 150,
  },
  {
    id: "DRYCLEAN019",
    primaryImage: "https://via.placeholder.com/400x300?text=DryCleaner",
    title: "Purely Clean Dry Cleaners",
    type: "Dry Cleaner",
    rating: {
      star: 4.5,
      reviews: 63,
    },
    services: ["Shirt Cleaning", "Blouse Steam", "Leather Garment Care"],
    price: 115,
  },
  {
    id: "PLUM018",
    primaryImage: "https://via.placeholder.com/400x300?text=Plumber",
    title: "Plumbing Pro",
    type: "Plumber",
    rating: {
      star: 4.7,
      reviews: 84,
    },
    services: ["Drain Unclogging", "Water Heater Repair", "Pipe Relining"],
    price: 155,
  },
  {
    id: "PLUM019",
    primaryImage: "https://via.placeholder.com/400x300?text=Plumber",
    title: "Fix It Right Plumbing",
    type: "Plumber",
    rating: {
      star: 4.8,
      reviews: 92,
    },
    services: ["Sump Pump Installation", "Gas Line Repair", "Rooter Service"],
    price: 160,
  },
];

export default function CategoryType({ params }: CategoryTypeProps) {
  const generateURL = (type: string, name: string) => {
    const partOne = type.toLowerCase().replaceAll(" ", "-");
    const partTwo = name.toLowerCase().replaceAll(" ", "-");

    const URL = `category/${partOne}/${partTwo}`;

    return URL;
  };

  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="pt-5 pb-12">
        <Link
          href="../"
          className="flex gap-x-1 items-center hover:underline font-semibold text-sm text-black/80 text-black mb-3"
        >
          <FaChevronLeft className="w-3 h-3" />
          Back
        </Link>
        <h1 className="text-xl md:text-2xl">
          Showing results for:{" "}
          <span className="font-bold">"{params.slug}"</span>
        </h1>
        <section className="py-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {businessDetails.map(
              (business) =>
                business.type.toLowerCase() ===
                  params.slug.replace("-", " ") && (
                  <Card
                    key={business.id}
                    slug={generateURL(business.type, business.title)}
                    image={business.primaryImage}
                    title={business.title}
                    stars={business.rating.star}
                    reviews={business.rating.reviews}
                    services={business.services}
                    price={business.price}
                    isFavourite={false}
                  />
                )
            )}
          </div>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
