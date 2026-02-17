'use client'

import { useRef } from "react"
import Button from "./components/Button"
import { outfit, inter } from "./fonts"
import ShootingStars from "./components/ShootingStars/ShootingStars"
import Image from "next/image"
import { colors } from "./colors"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const MainHook = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smoothing with updated physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  })

  // --- Animation Logic ---

  // 1. Zoom / Scale (0 -> 0.4)
  // Starts MASSIVE (Scale 25)
  // Shrinks to 4 (Big & Fancy) to reveal the text.
  const logoScale = useTransform(smoothProgress, [0, 0.4], [25, 4])

  // 2. Opacity
  // Fix: User requested transparent start so Hero is visible.
  // Fades in quickly (0.05 -> 0.15) to become solid for the zoom effect.
  // Using explicit 0 start.
  const logoOpacity = useTransform(smoothProgress, [0, 0.05, 0.2], [0, 0, 1])

  // 3. Hero Text Fade (0 -> 0.3)
  // Fades out as uWu reveals.
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0])

  // 4. Move Up (0.6 -> 0.9)
  const logoY = useTransform(smoothProgress, [0.6, 0.9], [0, -1000])


  // Phase 2: Reveal Content (0.6 -> 0.9)
  const revealOpacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1])
  const revealY = useTransform(smoothProgress, [0.6, 0.9], [50, 0])


  return (
    <div ref={containerRef} className={`${outfit.className} ${outfit.variable} h-[300vh] relative`}>

      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* Shooting Stars Background (Always present) */}
        <div className="absolute inset-0 z-0">
          <ShootingStars count={25} local />
        </div>

        {/* --- Logo Section (Fancy Text Only) --- */}
        {/* Z-Index 20 to be on top of Hero Text (19) */}
        <motion.div
          style={{ scale: logoScale, opacity: logoOpacity, y: logoY, zIndex: 20 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Centered Text Only */}
          <div className="flex flex-row justify-center items-center mb-12 origin-center">
            <div>
              {/* Fancy Styles: Bigger, Gradient, Glow */}
              <h1 className="font-black text-8xl tracking-tighter bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                uWu
              </h1>
            </div>
          </div>
        </motion.div>

        {/* --- Hero Text Section --- */}
        <motion.div
          style={{ opacity: heroTextOpacity, zIndex: 19 }}
          className="absolute inset-0 flex flex-col justify-center items-start pl-36 pointer-events-auto"
        >
          <div className="text-left max-w-2xl">
            <div className={`inline-block p-4 rounded-full mb-8`} style={{ backgroundColor: colors.transparentGrey }}>
              <h1 className={`text-sm text-[${colors.textGrey}] ${inter.className} ${inter.variable} font-medium`}>
                Pay at any store without bank freeze worries
              </h1>
            </div>

            <h1 className="text-7xl font-bold">The Liquidity</h1>
            <h1 className="text-6xl font-light mt-2">Protocol for</h1>
            <h1 className="text-7xl font-bold mt-2 bg-gradient-to-r from-[#FFFFFF] to-[#6080EB] bg-clip-text text-transparent">P2P payments</h1>

            <div className={`mt-8 text-[${colors.textGrey}] font-extralight ${inter.className} ${inter.variable}`}>
              uWu is a non-custodial decentralized liquidity market protocol where<br />
              users can participate as liquidity providors or borrowers
            </div>

            <div className="mt-12 flex justify-start">
              <Button href="/" bg={colors.primaryBlue} className="p-4 pl-6 pr-6 mr-4 rounded-full text-sm" text="Get Started" />
              <Button href="/" bg={colors.white} className="p-4 pl-6 pr-6 mr-4 rounded-full text-sm" color="black" text="Read the docs" />
            </div>
          </div>
        </motion.div>


        {/* --- Phase 2: Reveal Section ("Designed For") --- */}
        <motion.div
          style={{ opacity: revealOpacity, y: revealY, zIndex: 10 }}
          className="absolute inset-0 flex flex-col items-center justify-center w-full h-full"
        >
          {/* Earth Background Image - Backdrop Container */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/earth.png"
                alt="earth background"
                width={1200} // Explicit width to control size better
                height={1200}
                priority
                className="object-contain opacity-50" // Increased opacity for backdrop effect
                style={{ transform: 'scale(1.8)' }} // Optimized scale to 1.8
              />
            </div>
          </div>

          {/* 2-Column Content - Compact to fit inside Earth */}
          {/* Reduced max-w to 5xl to keep it tight */}
          <div className="relative z-10 w-full max-w-5xl px-8 flex flex-row items-center justify-between mt-32">

            {/* Left Column: Text */}
            <div className="flex flex-col items-start text-left max-w-md">
              <h1 className="text-5xl font-bold mb-6 drop-shadow-2xl">Designed for</h1>

              <p className={`text-lg text-[${colors.textGrey}] mb-8 leading-relaxed font-medium drop-shadow-lg ${inter.className}`}>
                Pay anywhere that accepts QR codes using your crypto balance. We handle the bridge, swap, and settlement in a single atomic transaction.
              </p>

              <div className="space-y-4 mb-8">
                {/* Feature 1 */}
                <div className="flex items-center">
                  <div className="bg-[#1E293B] p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.primaryBlue} viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-gray-200 drop-shadow-md">Zero bridge or conversion fees</p>
                </div>
                {/* Feature 2 */}
                <div className="flex items-center">
                  <div className="bg-[#1E293B] p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.primaryBlue} viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-gray-200 drop-shadow-md">Non-custodial - your keys, your coins</p>
                </div>
                {/* Feature 3 */}
                <div className="flex items-center">
                  <div className="bg-[#1E293B] p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.primaryBlue} viewBox="0 0 16 16">
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </div>
                  <p className="text-base font-medium text-gray-200 drop-shadow-md">Earn 4.5% APY while you spend</p>
                </div>
              </div>

              <Button
                href="/"
                bg="white"
                color="black"
                className="px-6 py-3 rounded-lg flex items-center font-bold text-sm"
                text={
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                    Launch App
                  </span>
                }
              />

            </div>

            {/* Right Column: Phone Image - Tucked in */}
            <div className="flex-1 flex justify-center items-center pl-8 pointer-events-none select-none">
              <div className="relative w-[350px] h-[700px]">
                <Image
                  src="/phone.png"
                  alt="App Screenshot"
                  fill
                  className="object-contain drop-shadow-2xl"
                  style={{ transform: 'rotate(-5deg)' }}
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default MainHook