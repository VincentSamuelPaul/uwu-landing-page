import { Butcherman } from "next/font/google"
import { outfit } from "./layout"
import Button from "./components/Button"


const ThirdHook = () => {
  return (
    <div className={`w-full flex flex-col justify-center items-center mt-32 ${outfit.className} ${outfit.variable}`}>
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Engineered for Scale</h1>
        <p className="mt-8 text-sm font-extralight">Experience the world's fastest settlement layer with advanced cryptography and
          <br/>
          developer-first infrastructure.
        </p>
      </div>
      <div className="mt-12 flex flex-row justify-center items-center">
        <div className="w-72 h-64 m-8 p-8 bg-[#1E1E1E] rounded-4xl">
          <div className="mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
            </svg>
          </div>
          <h1 className="mt-8 text-xl">Instant Settlements</h1>
          <p className="mt-4 text-sm text-[#8e8c8c]">Real-time finality using our<br/>proprietary Optimistic Bridges.<br/>Assests arrive before you can<br/>refresh your wallet.</p>
        </div>
        <div className="w-72 h-64 m-8 p-8 bg-[#1E1E1E] rounded-4xl">
          <div className="mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-percent" viewBox="0 0 16 16">
              <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
            </svg>
          </div>
          <h1 className="mt-8 text-xl">Micro-Fees</h1>
          <p className="mt-4 text-sm text-[#8e8c8c]">Algorithmic gas optimization<br/>reduces costs by 99% compared to<br/>mainnet. Pay in any stablecoin or<br/>native token.</p>
        </div>
         <div className="w-72 h-64 m-8 p-8 bg-[#1E1E1E] rounded-4xl">
          <div className="mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </svg>
          </div>
          <h1 className="mt-8 text-xl">Omni-chain Layer</h1>
          <p className="mt-4 text-sm text-[#8e8c8c]">Native support for 15+ EVM and<br/>non-EVM networks. True<br/>interoperability without the<br/>complexity.</p>
        </div>
      </div>

      <div className="w-250 h-96 mt-24 flex flex-row justify-between rounded-4xl p-16">
        <div className="">
          <h1 className="text-4xl font-semibold">Build the future of<br/>decentralised finance</h1>
          <p className="mt-8">Secure your dev access today and start integrating global liquidity inti<br/>your apps.</p>
        </div>
        <div className="mt-16">
          <Button href="/" text="Join Us" color="white" bg="#3B519B" className="p-4 pl-6 pr-6 rounded-full"/>
        </div>
      </div>
    </div>
  )
}

export default ThirdHook