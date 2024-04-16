import React from "react";
import Image from "next/image";
import darklogo from "../../../public/MainLogoDark.svg";
import SearchBar from "@/components/restaurantFeed/SearchBar";
import Avatar from "@mui/material/Avatar";

const HomePage = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-20 py-8 space-x-reverse space-x-4">
      <Image src={darklogo} alt={"image"} width={148} height={148} />
      <SearchBar />
      <Avatar className="h-10 w-10 bg-transparent" src="/broken-image.jpg" />
    </div>
  );
};

export default HomePage;
