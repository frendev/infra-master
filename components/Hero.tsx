import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import heroImg from '../public/assets/roadways.png';

function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen-2 text-center -mt-8">
      <Image
        src={heroImg}
        layout="fill"
        priority
        objectFit="cover"
        alt="hero-image"
      ></Image>
      <div className="absolute h-screen-2 left-0 right-0 bottom-0 bg-black/50 z-[2]" />

      {/* overlay */}

      <div className="container w-4/5 text-white z-[20] flex flex-col items-center md:items-start">
        <h2 className="text-4xl md:text-5xl font-bold">Inframaster</h2>
        <p className="py-5 text-2xl md:text-3xl underline-offset-5">
          Building Infrastructure Leaders
        </p>
        <button className="bg-slate-700 p-3 text-white text-md rounded-md">
          <Link href="/#contact">Contact US</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
