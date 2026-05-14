import React from "react";
import { motion } from "framer-motion";

export default function DAQ() {
  const text1 = "Yucca Direct (B2B) Quality Branding Yucca Rewards, ";
  const text2 = "Sustainable Innovation Partnerships Custom Packaging ";

  return (
    <div className="relative w-full h-[1100px] bg-[#dfdac6]">
      <section className="relative w-full h-[900px] bg-[#dfdac6] -mt-5 overflow-hidden flex flex-col items-center justify-center">
        <img
          className="absolute right-[300px] top-1/2 -translate-y-1/2 w-[900px] z-0 opacity-90"
          src="https://yucca.co.za/wp-content/uploads/2025/05/1c9fd89a470793175cfc7f14a7a6e6dc.webp"
          alt="Background"
        />


        <div className="relative z-10 w-full overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex"
            animate={{ x: ["-50%", "0%"] }} 
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
            }}
          >
            {[...Array(4)].map((_, i) => (
              <p key={i} className="text-6xl mr-10">
                {text1}
              </p>
            ))}
          </motion.div>
        </div>


        <div className="relative z-10 w-full overflow-hidden whitespace-nowrap mt-10">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" },
            }}
          >
            {[...Array(4)].map((_, i) => (
              <p key={i} className="text-6xl  mr-10">
                {text2}
              </p>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="flex-col text-center items-center justify-center">
        <p className="text-2xl">Set the standard for packaging excellence in your industry. Let us <br />
          help you make your products memorable.
        </p>
        <button className="text-white bg-black w-28 h-8 text-[10px] rounded-md mt-5">SEE PRODUCTS</button>
      </section>
    </div>
  );
}
