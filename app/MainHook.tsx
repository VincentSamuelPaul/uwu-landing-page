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

  // --- Animation Logic (Zoom-Through / Tunnel Effect) ---

  // 1. Zoom / Scale (0 -> 0.4)
  // Starts MASSIVE (Scale 25) so the user is "inside" the letters.
  // Shrinks to 1.5 (Slightly Big) to reveal the text.
  const logoScale = useTransform(smoothProgress, [0, 0.4], [25, 1.5])

  // 2. Opacity
  // User requested "when the text is at expanded state make it transperent".
  // Starts transparent (0) so Hero section is visible, then fades in to solid (1).
  const logoOpacity = useTransform(smoothProgress, [0, 0.2], [0, 1])

  // 3. Hero Text Fade (0 -> 0.3)
  // As we "come out" of the uWu text, the Hero text underneath might be visible
  // but the user wants it to fade *out* as we reveal uWu? 
  // "when the uWu is being reveled make the hero fade"
  // If we start "inside" uWu, the screen is white (or text color).
  // As we shrink, we see the background and the Hero text?
  // Actually, if uWu is z-index 20 and solid, it covers the Hero text (z-index 19).
  // As it shrinks, the Hero text is revealed... but the prompt says "make the hero fade".
  // Maybe they mean the Hero text should be visible *initially* (under the zoom?) or 
  // they want the Hero text to fade *away* as uWu becomes the focus.
  // Let's assume the latter: Hero text is visible (maybe through gaps or as uWu shrinks), then fades.
  // Actually, if uWu covers everything, we don't see Hero Text at 0.
  // Let's try to fade Hero Text OUT as uWu shrinks.
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0])

  // 4. Move Up (0.6 -> 0.9)
  const logoY = useTransform(smoothProgress, [0.6, 0.9], [0, -1000])


  // Phase 2: Reveal Content (0.6 -> 0.9)
  const revealOpacity = useTransform(smoothProgress, [0.6, 0.9], [0, 1])
  const revealY = useTransform(smoothProgress, [0.6, 0.9], [50, 0])


  return (
    <div ref={containerRef} className={`${outfit.className} ${outfit.variable} h-[300vh] relative`}>

      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* Shooting Stars Background (Always present) */}
        <div className="absolute inset-0 z-0">
          <ShootingStars count={25} local />
        </div>

        {/* --- Logo Section (Text Only) --- */}
        {/* Z-Index 20 to be on top of Hero Text (19) */}
        <motion.div
          style={{ scale: logoScale, opacity: logoOpacity, y: logoY, zIndex: 20 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Centered Text Only */}
          <div className="flex flex-row justify-center items-center mb-12 origin-center">
            <div>
              <h1 className="font-bold text-white text-6xl">uWu</h1>
            </div>
          </div>
        </motion.div>

        {/* --- Hero Text Section --- */}
        {/* Left Aligned and Vertically Centered */}
        <motion.div
          style={{ opacity: heroTextOpacity, zIndex: 19 }}
          className="absolute inset-0 flex flex-col justify-center items-start pl-24 pointer-events-auto"
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


        {/* --- Phase 2: Reveal Section (Earth + Text) --- */}
        <motion.div
          style={{ opacity: revealOpacity, y: revealY, zIndex: 10 }}
          className="absolute inset-0 flex flex-col items-center justify-center w-full h-full"
        >
          {/* Earth Background Image */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="relative w-full h-full">
              <Image
                src="/earth.png"
                alt="earth background"
                fill
                priority
                className="object-contain opacity-40"
                style={{ transform: 'scale(1.5)' }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-4 mt-32">
            <h1 className="text-6xl font-semibold mb-8">Pay with USDC<br />at any QR</h1>
            <h1 className={`text-xl font-extralight ${inter.className} ${inter.variable} max-w-2xl mx-auto leading-relaxed`}>
              Seamlessly buy or sell USDC across multiple chains using your local fiat currency. Whether you go from fiat to crypto or crypto to fiat, it's fast, secure and truly peer to peer with uWu.
            </h1>

            {/* Checkmarks / Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Feature 1 */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.primaryBlue} className="mr-4 flex-shrink-0" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <p className="text-lg">Zero bridge or conversion fees</p>
              </div>
              {/* Feature 2 */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.primaryBlue} className="mr-4 flex-shrink-0" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <p className="text-lg">Non-custodial - your keys, your coins</p>
              </div>
              {/* Feature 3 */}
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.primaryBlue} className="mr-4 flex-shrink-0" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <p className="text-lg">Earn 4.5% APY while you spend</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default MainHook