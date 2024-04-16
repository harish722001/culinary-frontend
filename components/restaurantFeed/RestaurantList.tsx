"use client";
import Image from "next/image";
import React from "react";
import img from "../../public/image.png";

const RestaurantList = () => {
  
  return (
    <div className="max-w-sm p-4 rounded overflow-hidden hover:shadow-lg hover:shadow-zinc-800 hover:border hover:border-zinc-800">
      <Image
        src={img}
        alt="Image of the dish"
        objectFit="cover"
      />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};

export default RestaurantList;
