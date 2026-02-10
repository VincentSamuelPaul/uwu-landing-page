import Button from "./components/Button"
import { outfit } from "./layout"
import Image from "next/image"

const SecondHook = () => {
  return (
    <div className={`w-460 ${outfit.className} ${outfit.variable}`}>
      <div className={`mt-64 ${outfit.className} ${outfit.variable}`}>
        <h1 className="text-center text-4xl font-semibold">Pay with USDC<br/>at any QR</h1>
        <h1 className="mt-8 text-center text-sm font-extralight">Seamlessly buy or sell USDC across multiple chains using your local fiat currency. Whether you go<br/>
          from fiat to crypto or crypto to fiat, it's fast, secure and truly peer to peer with uWu.
        </h1>
      </div>
      <div className="mt-24 flex flex-row justify-evenly">
        <div className="">
          <h1 className="text-6xl font-medium">Designed for</h1>
          <p className="mt-4 text-sm font-extralight">
            Pay anywhere that accepts QR codes using your crypto
            <br/>
            balance. We handle the bridge, swap and settlement in a
            <br/>
            single atomic transation
          </p>
          <div className="mt-8 flex flex-row justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3B519B" className="mr-4 bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <p>Zero bridge or conversion fees</p>
          </div>
          <div className="mt-2 flex flex-row justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3B519B" className="mr-4 bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <p>Non-custodial - your keys, your coins</p>
          </div>
          <div className="mt-2 flex flex-row justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3B519B" className="mr-4 bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <p>Earn 4.5% APY while you spend</p>
          </div>
          <div className="mt-12">
            <Button href="/" text="Launch App" color="black" bg="white" className="p-4 rounded-full"/>
          </div>
        </div>
        <div>put image here</div>
      </div>
    </div>
  )
}

export default SecondHook