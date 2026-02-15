import Image from "next/image";
import { 
  FaFacebookF, 
  FaGithub, 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter 
} from "react-icons/fa6";
import Button from "./Button";
import { inter } from "../fonts";
import {colors} from "../colors";

const Footer = () => {
  return (
    <footer className={`mt-24 mb-24 px-8 text-[${colors.textGrey}] flex flex-col justify-center items-center ${inter.className} ${inter.variable}`}>
      
      <div className="w-2/3 h-px bg-white/50 mx-auto"></div>

      <div className="w-3/4 mx-auto mt-12 mb-12 flex flex-row justify-start items-start ">

        <div className="flex flex-col cursor-pointer ">
          <Image
            src="/footer-logo.png"
            width={480}
            height={480}
            alt="Footer logo"
          />

          {/* <div className="flex gap-6 text-2xl text-white/80">
            <FaFacebookF className="cursor-pointer"/>
            <FaGithub className="cursor-pointer"/>
            <FaInstagram className="cursor-pointer"/>
            <FaLinkedinIn className="cursor-pointer"/>
            <FaXTwitter className="cursor-pointer"/>
          </div> */}
        </div>

        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="m-4 bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
            <h1 className="text-md">Address, 560076</h1>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="mr-12 flex flex-row justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="m-4 bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
              <h1 className="text-md">(123) 456-7890</h1>
            </div>
            <div className="flex flex-row justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="m-4 bi bi-printer-fill" viewBox="0 0 16 16">
                <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
              </svg>
              <h1 className="text-md">(123) 456-7890</h1>
            </div>
          </div>
          <div className="m-4 mt-6 flex flex-row justify-start items-center">
            <h1>Social Media</h1>
            <FaFacebookF className="cursor-pointer ml-4 text-white"/>
            <FaGithub className="cursor-pointer ml-4 text-white"/>
            <FaInstagram className="cursor-pointer ml-4 text-white"/>
            <FaLinkedinIn className="cursor-pointer ml-4 text-white"/>
            <FaXTwitter className="cursor-pointer ml-4 text-white"/>
          </div>
        </div>
      </div>

      <div className="w-2/3 h-px bg-white/50 "></div>
      <div className="w-2/3 flex flex-row justify-between items-start">
        <div className="w-fit mt-4 flex flex-row justify-start items-start">
          <Button href="/" className="text-xs mr-6 ">ABOUT US</Button>
          <Button href="/" className="text-xs mr-6 ">CONTACT US</Button>
          <Button href="/" className="text-xs mr-6 ">HELP</Button>
          <Button href="/" className="text-xs mr-6 ">PRIVACY POLICY</Button>
          <Button href="/" className="text-xs mr-6 ">DISCLAIMER</Button>
        </div>
        <div className="mt-4">
          <h1 className=" text-xs">Copyright ©️ 2026 uWu</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
