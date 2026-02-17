"use client";

import "../globals.css";
import Button from "./Button";
import { inter } from "../fonts";
import { colors } from "../colors";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide if scrolled down past 100px
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else if (latest < 100) {
      // Show if near top
      setHidden(false);
    }
    // Optional: Show on scroll up? User said "hide when earth image comes".
    // "when earth image comes" implies scrolling DOWN to it.
    // If they scroll back UP, they probably want navigation.
    // Let's refine: Hide if latest > 100.
    if (latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });


  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-250%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 mt-4 w-full flex flex-row justify-center items-center"
    >
      <div className="flex w-260 flex-row justify-between items-center p-2 rounded-full" style={{ backgroundColor: colors.solidGrey }}>
        <div className="ml-8 flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center align-middle rounded-xl p-2" style={{ background: `linear-gradient(to bottom, ${colors.logoPurple}, ${colors.logoPink})` }}>
            <h1 className="text-xs">uW</h1>
          </div>
          <h1 className="ml-2 font-bold">uWu</h1>
        </div>
        <div className="w-100 flex flex-row justify-between items-center">
          <Button href="/" className="text-sm">Products</Button>
          <Button href="/" className="text-sm">Resources</Button>
          <Button href="/" className="text-sm">Contact</Button>
          <Button href="/" bg={colors.white} color={colors.black} text="Launch App" className="p-3 rounded-full text-sm" />
        </div>
      </div>
    </motion.div>
  )
}

export default Header