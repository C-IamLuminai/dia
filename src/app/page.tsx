'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinimized(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1
          className={`text-3xl sm:text-4xl font-bold tracking-tight text-center sm:text-left transition-all duration-700 ${
            minimized
              ? "fixed top-8 left-8 text-lg sm:text-xl max-w-xs z-20 text-left"
              : ""
          }`}
          style={minimized ? { position: 'fixed', top: 32, left: 32, margin: 0 } : {}}
        >
          Välkommen till DiA!
        </h1>
        <p
          className={`text-lg sm:text-xl text-center sm:text-left max-w-2xl transition-all duration-700 ${
            minimized
              ? "fixed top-20 left-8 text-xs sm:text-sm max-w-xs z-20 text-left"
              : ""
          }`}
          style={minimized ? { position: 'fixed', top: 72, left: 32, margin: 0 } : {}}
        >
          DiA är en plattform för att dela kunskap och erfarenheter inom utbildning
          och lärande. Här kan du hitta resurser, metoder och verktyg som
          stödjer utveckling och förbättring av utbildningspraktiker.
        </p>
        <div className="w-full flex justify-center sm:justify-start relative" style={{ minHeight: 60 }}>
          <Image
            className={`dark:invert transition-all duration-700 ${minimized ? "z-10" : "z-0"}`}
            src="/DiA.jpg"
            alt="dia graphic"
            width={180}
            height={38}
            priority
            style={
              minimized
                ? {
                    zIndex: 10,
                    position: 'fixed',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '66vh',
                    width: 'auto',
                    maxWidth: '100vw',
                    objectFit: 'contain',
                  }
                : {
                    position: 'absolute',
                    left: '25%',
                    top: 0,
                    transform: 'translateX(-50%)',
                    zIndex: 0,
                  }
            }
          />
          {minimized && (
            <svg
              viewBox="0 0 900 600"
              style={{
                position: 'fixed',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                height: '66vh',
                width: 'auto',
                maxWidth: '100vw',
                pointerEvents: 'none',
                zIndex: 20,
              }}
            >
              <a href="/utmaning-nps">
                <polygon points="375,335 375,300 170,300 170,335" fill="rgba(59,130,246,0.2)" stroke="#2563eb" strokeWidth="2" style={{cursor:'pointer', pointerEvents:'all'}} />
              </a>
              <a href="/ovningsrum">
                <polygon points="511,512 556,467 581,408 596,337 628,330 620,410 592,482 533,540" fill="rgba(234,179,8,0.2)" stroke="#eab308" strokeWidth="2" style={{cursor:'pointer', pointerEvents:'all'}} />
              </a>
              <a href="/utveckling">
                <polygon points="475,300 615,210 600,190 460,275" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="2" style={{cursor:'pointer', pointerEvents:'all'}} />
              </a>
              <a href="/tankesmedja">
                <polygon points="153,451 189,431 229,490 281,530 331,547 370,552 369,594 278,574 199,518" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="2" style={{cursor:'pointer', pointerEvents:'all'}} />
              </a>
              <a href="/insikter">
                <polygon points="682,146 785,85 772,64 672,123" fill="rgba(99,102,241,0.2)" stroke="#6366f1" strokeWidth="2" style={{cursor:'pointer', pointerEvents:'all'}} />
              </a>
              <a href="/metoder">
                <polygon points="686,150 697,171 801,105 786,87" fill="rgba(236,72,153,0.2)" stroke="#ec4899" strokeWidth="2" style={{cursor:'pointer', pointerEvents:'all'}} />
              </a>
              <a href="/verktyg">
                <polygon points="701,172 798,111 809,134 714,191" fill="rgba(251,146,60,0.2)" stroke="#fb923c" strokeWidth="2" style={{cursor:'pointer', pointerEvents:'all'}} />
              </a>
              <a href="/om-dia">
                <polygon points="193,238,226,199,263,168,295,146,326,136,369,127,400,127,428,134,453,139,472,145,485,121,454,104,404,96,366,95,320,103,275,122,236,141,215,155,197,178,183,196,166,220" fill="rgba(59,130,246,0.15)" stroke="#2563eb" strokeWidth="2" style={{cursor:'pointer', pointerEvents:'all'}} />
              </a>
            </svg>
          )}
        </div>
        {/* Spacer to ensure links are not overlapped by the image */}
        <div
          style={{
            minHeight: minimized ? 280 : 100
          }}
        />
        {/* Subpage links and grouped section */}
        <div className="flex flex-wrap gap-4 items-center justify-center flex-col sm:flex-row mt-4">
          <a className="rounded-full border border-solid border-blue-500 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]" href="/utmaning-nps">Utmaning NPS</a>
          <a className="rounded-full border border-solid border-green-500 text-green-700 bg-green-50 hover:bg-green-100 transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]" href="/utveckling">Utveckling</a>
          <a className="rounded-full border border-solid border-purple-500 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]" href="/tankesmedja">Tankesmedja</a>
          <a className="rounded-full border border-solid border-yellow-500 text-yellow-700 bg-yellow-50 hover:bg-yellow-100 transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]" href="/ovningsrum">Övningsrum</a>
          {/* Section: Insikter, Metoder, Verktyg */}
          <div className="flex flex-col gap-2 items-center sm:items-start bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
            <span className="font-semibold text-base mb-1">Kunskapsbank</span>
            <div className="flex flex-wrap gap-2">
              <a className="rounded border border-solid border-indigo-400 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors flex items-center justify-center font-medium text-sm h-9 px-4" href="/insikter">Insikter</a>
              <a className="rounded border border-solid border-pink-400 text-pink-700 bg-pink-50 hover:bg-pink-100 transition-colors flex items-center justify-center font-medium text-sm h-9 px-4" href="/metoder">Metoder</a>
              <a className="rounded border border-solid border-orange-400 text-orange-700 bg-orange-50 hover:bg-orange-100 transition-colors flex items-center justify-center font-medium text-sm h-9 px-4" href="/verktyg">Verktyg</a>
            </div>
            Kunskapsbanken är under uppbyggnad!
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
       
      </footer>
    </div>
  );
}
