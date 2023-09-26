import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

export default function Header() {
  return (
    <div className="lg:w-full flex flex-row items-center justify-between bg-red-600 p-5">
      <Image
        width={150}
        height={150}
        className="rounded-lg"
        src="/image 20.png"
        alt="user-profile-img"
      />
      <AiOutlinePlus size={40} color="#fff"/>
    </div>
  );
}
