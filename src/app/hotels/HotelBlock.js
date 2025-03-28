"use client";
import Image from "next/image";

export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {
    return `/hotels/${src}.jpeg`;
  };
  return (
    // <div>
    //   <h2>{name}</h2>
    //   <p>{capacity}</p>
    //   <Image
    //     src={id}
    //     width={300}
    //     height={300}
    //     alt={"hotel image"}
    //     loader={imageLoader}
    //   />
    // </div>
    <div className="flex justify-center items-center mb-6 w-screen">
      <div className="text-center relative w-[300px] h-[300px] rounded-lg overflow-hidden">
        <Image
          src={id}
          width={300}
          height={300}
          alt="hotel image"
          loader={imageLoader}
          className=" text-center object-cover w-full h-full p-6 mb-6"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-l font-semibold">Capacity: {capacity}</p>
        </div>
      </div>
    </div>
  );
}
