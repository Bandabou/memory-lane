'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 500); // fade in after 0.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      
      <div className={`relative mb-10 transition-opacity duration-[2000ms] ease-in-out ${showImage ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative w-[240px] sm:w-[320px] md:w-[400px] h-[240px] sm:h-[320px] md:h-[400px] mx-auto">
          <Image
            src="/cartoons/fam_cartoon.png"
            alt="Cartoon family"
            fill
            className="rounded-xl shadow-xl object-contain"
            priority
          />
        </div>
      </div>

      <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to Memory Lane</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        Explore precious moments through time. Walk down the years and relive beautiful memories.
      </p>
      <Link
        href="/memory-lane"
        className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition shadow-lg"
      >
        Take Me to Memory Lane →
      </Link>
    </main>
  );
}
