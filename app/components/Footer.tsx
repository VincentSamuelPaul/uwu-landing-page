import Image from "next/image";
import { 
  FaFacebookF, 
  FaGithub, 
  FaInstagram, 
  FaLinkedinIn, 
  FaXTwitter 
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-24 px-8 text-white">
      
      <div className="w-2/3 h-px bg-white/50 mx-auto"></div>

      <div className="max-w-6xl mx-auto mt-16 flex justify-between items-start">

        <div className="flex flex-col space-y-6">
          <Image
            src="/footer-logo.png"
            width={140}
            height={40}
            alt="Footer logo"
          />

          <div className="flex gap-6 text-2xl text-white/80">
            <FaFacebookF />
            <FaGithub />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

          <div className="flex flex-col space-y-4">
            <h2 className="text-sm font-semibold">Resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
              <li>Blog</li>
              <li>Brand</li>
              <li>FAQ</li>
              <li>Case Studies</li>
              <li>Help & Support</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-sm font-semibold">Developers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
              <li>Build</li>
              <li>Documentation</li>
              <li>Technical Paper</li>
              <li>Case Security</li>
              <li>Bug Bounty</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-sm font-semibold">Company</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/70">
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Technical Paper</li>
              <li>Contact</li>
              <li>Manage Analytics</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
