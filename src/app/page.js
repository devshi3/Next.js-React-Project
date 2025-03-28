import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <Image
        src={`/ski/ski-mountain.jpg`}
        layout="fill"
        objectFit="cover"
        alt="hotel image"
        className=" text-center object-cover w-full h-full p-6 mb-6"
      />
    </main>
  );
}
