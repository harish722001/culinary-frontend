import React from "react";
import Image from "next/image";
import darklogo from "../../../public/MainLogoDark.svg";
import SearchBar from "@/components/restaurantFeed/SearchBar";
import RestaurantList from "@/components/restaurantFeed/RestaurantList";
import Avatar from "@mui/material/Avatar";

const HomePage = () => {
  return (
    <div className="mx-20 sm:mx-20 lg:mx-40">
      <div className="flex flex-col sm:flex-row  justify-between items-center py-8 space-y-4 space-y-reverse sm:space-x-reverse sm:space-x-4">
        <Image src={darklogo} alt={"image"} width={148} height={148} />
        <SearchBar />
        <Avatar
          className="h-10 w-10 bg-transparent order-first sm:order-last"
          src="/broken-image.jpg"
        />
      </div>
      <div className="flex-col my-10">
        <div className="sticky top-0 py-8 bg-black">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-gray-200">
            Restaurants For You
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-10">
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
          <RestaurantList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
