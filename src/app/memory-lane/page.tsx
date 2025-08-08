'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const memories = [
  { year: '2007', text: 'Birth of the brain?', image: '/images/pic_birth.jpeg' },
  { year: '2001/09/11', text: 'Greeting from Osama Bin River.', image: '/images/riveru.jpeg' },
  { year: '2010', text: 'Loading, Loading Loading......', image: '/images/loading.jpeg' },
  { year: '2000-2025', text: 'Ugh wtf.', image: '/images/papawtf.jpeg' },
  { year: '2000-2025', text: 'Hoeveel jobs heeft hij???', image: '/images/papa2.jpeg' },
  { year: '2000-2025', text: 'Spot the differences.', image: '/images/pugs.jpeg' },
  { year: '2000-2025', text: 'Michelangelos creation of Cora.', image: '/images/dogs.jpeg' },
  { year: '2000-2025', text: 'Underbite and overbite...', image: '/images/ugh.jpeg' },
  { year: '2000-2025', text: 'Fire the barber...', image: '/images/costa_rica.jpeg' },
  { year: '2000-2025', text: 'The first graduation celebration.', image: '/images/max_grad.jpeg' },
  { year: '2000-2025', text: 'For fuck sake took you long enough.', image: '/images/driver.jpeg' },
  { year: '2000-2025', text: 'Greetings from Soldjaboi.', image: '/images/guy_kaya.jpeg' },
  { year: '2000-2025', text: 'Greeting from our chef Rivaru Ramsayeru.', image: '/images/oliver.jpeg' },
  { year: '2000-2025', text: 'Ugh wtf part 2.', image: '/images/wtf2.jpeg' },
  { year: '2000-2025', text: 'Future virgins.', image: '/images/brosis.jpeg' },
  { year: '2000-2025', text: 'Love at first sight (riv had een koekje in haar mond).', image: '/images/daisy.jpeg' },
  { year: '2000-2025', text: 'Real recognize real.', image: '/images/don.jpeg' },
  { year: '2000-2025', text: 'Mama of the california chei.', image: '/images/eddie.jpeg' },
  { year: '2000-2025', text: 'Papas side of the family.', image: '/images/famafrica.jpeg' },
  { year: '2000-2025', text: 'The good old days.', image: '/images/goodold.jpeg' },
  { year: '2000-2025', text: 'Existential crisis.', image: '/images/hats.jpeg' },
  { year: '2000-2025', text: 'The greatest deal of the century.', image: '/images/iconic.jpeg' },
  { year: '2000-2025', text: 'Is there anything left in there?', image: '/images/toof.jpeg' },
  { year: '2000-2025', text: 'Silence of the pugs.', image: '/images/xmas.jpeg' },
  { year: '2000-2025', text: 'Always the best dressed.', image: '/images/rivfail.jpeg' },
  { year: '2000-2025', text: 'And now, the end is near, and so I face the final curtain.', image: '/images/surprise.jpeg' },
];

export default function MemoryLanePage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const router = useRouter();

  const selectedMemory = memories[selectedIndex];

  // Track if image viewer should be top:0 (true) or top:4rem (false)
  const [stickyTopZero, setStickyTopZero] = useState(false);

  // Reference to the back button element
  const backButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!backButtonRef.current) return;

      // Get the bottom position of the back button relative to viewport
      const backBtnBottom = backButtonRef.current.getBoundingClientRect().bottom;

      // If back button bottom is above viewport top, fix image to top: 0
      if (backBtnBottom <= 0) {
        setStickyTopZero(true);
      } else {
        setStickyTopZero(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100 min-h-screen py-16 px-6 text-gray-800 relative">

      {/* Back Button */}
      <button
        ref={backButtonRef}
        onClick={() => router.back()}
        className="absolute top-4 left-4 bg-white/70 hover:bg-white/80 text-gray-800 px-3 py-1 rounded-lg shadow-md transition cursor-pointer z-20"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold text-center mb-12">Memory Lane</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        {/* Left: Memory List */}
        <div className="space-y-8 pt-[150px] md:pt-0 md:pb-0">
          {memories.map((memory, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer transition duration-300 p-4 rounded-lg ${
                selectedIndex === index ? 'bg-white/60' : 'hover:bg-white/40'
              }`}
            >
              <p className="text-xl font-medium">{memory.year}</p>
              <p className="italic text-gray-700">{memory.text}</p>
            </div>
          ))}
        </div>

        {/* Right: Sticky Image Viewer (desktop only) */}
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

      {/* Mobile: Fixed Image Viewer that moves from below back button to top on scroll */}
      <div
        className={`fixed left-0 right-0 md:hidden bg-white/90 p-4 shadow-b-lg border-b border-gray-300 max-h-[50vh] overflow-hidden z-50 transition-[top] duration-300 ease-in-out`}
        style={{ top: stickyTopZero ? '0' : '4rem' }}
      >
        <div className="flex items-center justify-center h-full">
          <Image
            src={selectedMemory.image}
            alt={`Memory from ${selectedMemory.year}`}
            sizes="100vw"
            className="max-h-[40vh] w-auto object-contain rounded-lg"
            width={0}
            height={0}
          />
        </div>
      </div>

      {/* Update padding-top on main content for mobile so list is not hidden under image */}
      <style jsx>{`
        @media (max-width: 767px) {
          main {
            padding-top: 150px; /* padding for the image viewer */
          }
        }
      `}</style>
    </main>
  );
}
