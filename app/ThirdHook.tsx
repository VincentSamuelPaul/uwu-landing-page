"use client";

import { useEffect, useRef, useState } from "react";
import { outfit, inter } from "./fonts";
import Button from "./components/Button";
import Image from "next/image";
import { colors } from "./colors";

const ThirdHook = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.4 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <div className={`w-full flex flex-col justify-center items-center mt-32 pb-64 ${outfit.className} ${outfit.variable} relative overflow-hidden`}>
      <Image
        src="/coin.png"
        alt="coin background"
        fill
        className="pointer-events-none z-0 object-cover opacity-100 pl-96 pb-96"
        style={{ transform: 'translateY(8%) scale(1.1)' }}
      />
      <div className="relative z-10 w-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Engineered for Scale</h1>
          <p className={`mt-8 text-sm font-extralight ${inter.className} ${inter.variable}`}>
            Experience the world's fastest settlement layer with advanced cryptography and
            <br />
            developer-first infrastructure.
          </p>
        </div>

        <div ref={cardsRef} className="mt-12 flex flex-row justify-center items-center">

          <div
            className={`w-72 h-64 m-8 p-8 bg-[${colors.glassGrey}] rounded-4xl transform transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="w-fit p-3 bg-[#00d0ff31] rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00D2FF" viewBox="0 0 16 16">
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
              </svg>
            </div>
            <h1 className="mt-6 text-xl">Instant Settlements</h1>
            <p className={`mt-4 text-sm text-[${colors.textGrey}] ${inter.className} ${inter.variable}`}>
              Real-time finality using our<br/>
              proprietary Optimistic Bridges.<br/>
              Assests arrive before you can
              refresh your wallet.
            </p>
          </div>

          <div
            className={`w-72 h-64 m-8 p-8 bg-[${colors.glassGrey}] rounded-4xl transform transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-fit p-3 bg-[#9d50bb35] rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9D50BB" viewBox="0 0 16 16">
                <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </div>
            <h1 className="mt-6 text-xl">Micro-Fees</h1>
            <p className={`mt-4 text-sm text-[${colors.textGrey}] ${inter.className} ${inter.variable}`}>
              Algorithmic gas optimization
              reduces costs by 99% compared to
              mainnet. Pay in any stablecoin or
              native token.
            </p>
          </div>

          <div
            className={`w-72 h-64 m-8 p-8 bg-[${colors.glassGrey}] rounded-4xl transform transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-fit p-3 bg-[#00d0ff31] rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00D2FF" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
              </svg>
            </div>
            <h1 className="mt-6 text-xl">Omni-chain Layer</h1>
            <p className={`mt-4 text-sm text-[${colors.textGrey}] ${inter.className} ${inter.variable}`}>
              Native support for 15+ EVM and<br/>
              non-EVM networks. True<br/>
              interoperability without the<br/>
              complexity.
            </p>
          </div>

        </div>

        <div className={`w-250 h-96 mt-24 flex flex-row justify-between bg-[${colors.glassGrey}] rounded-4xl p-16 inset-0 backdrop-blur-[1px]`}>
          <div>
            <h1 className="text-4xl font-semibold">
              Build the future of<br />decentralised finance
            </h1>
            <p className={`mt-8 text-[${colors.textGrey}] ${inter.className} ${inter.variable}`}>
              Secure your dev access today and start integrating global liquidity in<br />
              your apps.
            </p>
          </div>
          <div className="mt-16">
            <Button href="/" text="Join Us" color="white" bg={colors.primaryBlue} className="p-4 pl-6 pr-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdHook;
