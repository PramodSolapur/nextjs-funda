import Image from "next/image";
import Navbar from "./Navbar";
import type { StaticImageData } from "next/image";

interface HeroProps {
  title: String;
  image: StaticImageData;
}

export default function Hero(props: HeroProps) {
  return (
    <main className="h-screen relative">
      <Navbar />
      <div className="w-[60%] pt-72 mx-auto">
        <h1 className="text-5xl tracking-widest font-semibold text-center capitalize">
          {props.title}
        </h1>
      </div>
      <div className="absolute inset-0 h-full w-full -z-10">
        <Image src={props.image} alt="car factory" fill />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black" />
      </div>
    </main>
  );
}
