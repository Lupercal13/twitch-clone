import React from "react";
import Image from "next/image";

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
  return (
    <div className="p-2">
      <Image src={img} className="cursor-pointer" alt='/' />
      <div className="flex pt-2">
        <div className="pr-2">
          <Image
            src={profile_img}
            alt="/"
            height="60"
            width="60"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm font-bold hover:text-gray-400 cursor-pointer">{title}</p>
          <p className="text-sm text-gray-500">{user}</p>
          <p className="text-sm text-gray-500">{game}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveChannelItem;
