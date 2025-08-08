'use client';
import Image from 'next/image';
import { useState } from 'react';

const memories = [
  { year: '2000', text: 'Birth of the brain?', image: '/images/pic_birth.jpeg' },
  { year: '2001/09/11', text: 'Greeting from Osama Bin River.', image: '/images/riveru.jpeg' },
  { year: '2010', text: 'Loading, Loading Loading......', image: '/images/loading.jpeg' },
  { year: '2017', text: 'Ugh wtf', image: '/images/papawtf.jpeg' },
  { year: '2017', text: 'Hoeveel jobs heeft hij???', image: '/images/papa2.jpeg' },
  { year: '2017', text: 'Spot the differences.', image: '/images/pugs.jpeg' },
  { year: '2017', text: 'Michelangelos creation of Cora', image: '/images/dogs.jpeg' },
  { year: '2017', text: 'Underbite and overbite...', image: '/images/ugh.jpeg' },
  { year: '2010', text: 'Fire the barber...', image: '/images/costa_rica.jpeg' },
  { year: '2017', text: 'The first graduation celebration', image: '/images/max_grad.jpeg' },
  { year: '2025', text: 'For fuck sake took you long enough.', image: '/images/driver.jpeg' },
  { year: '2025', text: 'Greetings from SkopetRIV', image: '/images/guy_kaya.jpeg' },
  { year: '2010', text: 'Greeting from our chef Rivaru Ramsayeru', image: '/images/oliver.jpeg' },
  { year: '2025', text: 'And now, the end is near, and so I face the final curtain', image: '/images/surprise.jpeg' },
];

export default function MemoryLanePage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // default image shown

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const selectedMemory = memories[selectedIndex];

  return (
    <main className="bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100 min-h-screen py-16 px-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-12">Memory Lane</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        {/* Left: Memory List */}
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer transition duration-300 p-4 rounded-lg ${
                selectedIndex === index ? 'bg-white/60' : 'hover:bg-white/40'
              }`}
            >
              <p className="text-xl font-medium">{memory.year}</p>
              <p className="italic text-gray-700">{memory.text}</p>
            </div>
          ))}
        </div>

        {/* Right: Sticky Image Viewer */}
        <div className="hidden md:block h-full">
          <div className="sticky top-24">
            <div className="bg-white/40 p-4 rounded-xl shadow-xl max-h-[600px] flex items-center justify-center">
              <Image
                src={selectedMemory.image}
                alt={`Memory from ${selectedMemory.year}`}
                sizes="(min-width: 768px) 600px, 100vw"
                className="w-full h-auto max-h-[500px] object-contain"
                width={0}
                height={0}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Show image below */}
      <div className="md:hidden mt-10 max-w-xl mx-auto">
        <div className="bg-white/40 p-4 rounded-xl shadow-xl flex items-center justify-center">
          <Image
            src={selectedMemory.image}
            alt={`Memory from ${selectedMemory.year}`}
            sizes="100vw"
            className="w-full h-auto max-h-[400px] object-contain"
            width={0}
            height={0}
          />
        </div>
      </div>
    </main>
  );
}
