import Image from "next/image"

const Footer = () => {
  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      <div className="w-2/3 h-0.5 bg-white opacity-50"></div>
      <div className="flex flex-row justify-between items-center">
        <Image src="/footer-logo.png" width={500} height={500} alt="Footer logo"/>
        <div className="">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer