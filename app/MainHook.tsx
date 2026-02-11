import Button from "./components/Button"
import { outfit } from "./fonts"

const MainHook = () => {
  return (
    <div className={`${outfit.className} ${outfit.variable} pl-50 pr-50`}>
      <div className="mt-24 w-fit bg-[#D9D9D930] p-4 rounded-full">
        <h1 className="text-[#8e8c8c]">
          pay at any store without bank freeze worries
        </h1>
      </div>
      <div className="mt-12">
        <h1 className="mt-4 text-7xl font-bold">The Liquidity</h1>
        <h1 className="mt-4 text-6xl font-light">Protocol for</h1>
        <h1 className="mt-4 text-7xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#6080EB] bg-clip-text text-transparent">P2P payments</h1>
      </div>
      <div className="mt-4 text-[#767575] font-extralight">
        uWu is a non-custodial decentralized liquidity market protocol where<br/>
        users can participate as liquidity providors or borrowers
      </div>
      <div className="mt-8">
        <Button href="/" bg="#3B519B" className="p-4 pl-6 pr-6 mr-4 rounded-full text-sm" text="Get Started"/>
        <Button href="/" bg="#FFFFFF" className="p-4 pl-6 pr-6 mr-4 rounded-full text-sm" color="black" text="Read the docs"/>
      </div>
    </div>
  )
}

export default MainHook