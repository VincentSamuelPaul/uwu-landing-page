import Button from "./components/Button"
import { outfit, inter } from "./fonts"
import ShootingStars from "./components/ShootingStars/ShootingStars"
import Image from "next/image"
import { colors } from "./colors"

const MainHook = () => {
  return (
    <div className={`${outfit.className} ${outfit.variable} pl-50 pr-50`}>
      <div className="pb-48 relative z-10 overflow-hidden">
        <ShootingStars count={25} local />
        <div className={`mt-24 w-fit bg-[${colors.transparentGrey}] p-4 rounded-full`}>
          <h1 className={`text-sm text-[${colors.textGrey}] ${inter.className} ${inter.variable} font-medium`}>
            Pay at any store without bank freeze worries
          </h1>
        </div>
        <div className="mt-12">
          <h1 className="mt-4 text-7xl font-bold">The Liquidity</h1>
          <h1 className="mt-4 text-6xl font-light">Protocol for</h1>
          <h1 className="mt-4 text-7xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#6080EB] bg-clip-text text-transparent">P2P payments</h1>
        </div>
        <div className={`mt-4 text-[${colors.textGrey}] font-extralight  ${inter.className} ${inter.variable}`}>
          uWu is a non-custodial decentralized liquidity market protocol where<br/>
          users can participate as liquidity providors or borrowers
        </div>
        <div className="mt-8">
          <Button href="/" bg={colors.primaryBlue} className="p-4 pl-6 pr-6 mr-4 rounded-full text-sm" text="Get Started"/>
          <Button href="/" bg={colors.white} className="p-4 pl-6 pr-6 mr-4 rounded-full text-sm" color="black" text="Read the docs"/>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/earth.png"
          alt="earth background"
          width={1920}
          height={1080}
          className="absolute left-1/2 top-0 mb-48 opacity-20 z-0 pointer-events-none w-screen h-auto object-contain"
          style={{ transform: 'translateX(calc(-50% - 8px)) scale(2)'}}
        />
        <div className="w-full relative z-10">
          <h1 className="text-center text-4xl font-semibold">Pay with USDC<br/>at any QR</h1>
          <h1 className={`mt-8 text-center text-sm font-extralight ${inter.className} ${inter.variable} `}>Seamlessly buy or sell USDC across multiple chains using your local fiat currency. Whether you go<br/>
            from fiat to crypto or crypto to fiat, it's fast, secure and truly peer to peer with uWu.
          </h1>
        </div>
        <div className="w-full mt-24 flex flex-row justify-between relative z-10">
          <div className="w-full">
            <h1 className="text-6xl font-medium">Designed for</h1>
            <p className={`mt-12 text-sm font-extralight  ${inter.className} ${inter.variable}`}>
              Pay anywhere that accepts QR codes using your crypto
              <br/>
              balance. We handle the bridge, swap and settlement in a
              <br/>
              single atomic transation
            </p>
            <div className={`mt-8 flex flex-row justify-start items-center  ${inter.className} ${inter.variable}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.primaryBlue} className="mr-4 bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <p>Zero bridge or conversion fees</p>
            </div>
            <div className={`mt-2 flex flex-row justify-start items-center  ${inter.className} ${inter.variable}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.primaryBlue} className="mr-4 bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <p>Non-custodial - your keys, your coins</p>
            </div>
            <div className={`mt-2 flex flex-row justify-start items-center  ${inter.className} ${inter.variable}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.primaryBlue} className="mr-4 bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <p>Earn 4.5% APY while you spend</p>
            </div>
            <div className="mt-12">
              <Button href="/" color="black" bg={colors.white} className="p-4 rounded-full flex items-center pr-6 pl-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 mr-2" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                </svg>
                Launch App
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/phone.png"
              alt="phone ui"
              width={720}
              height={720}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHook