import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 500], [0, -150]);
  const textY  = useTransform(scrollY, [0, 500], [0, -50]);
  const textX  = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <div className="relative h-screen overflow-hidden">


      <motion.div
        style={{ y: textY }}
        className="absolute z-20 ml-32 mt-32"
      >
        <p className="text-7xl text-black leading-tight font-thin"> 
          Packaging that <br />
          Performs. Innovated <br />
          for industry Leaders.
        </p>
      </motion.div>

      <motion.div 
      className="absolute z-20" 
      style={{ y: textY }}>
        <div className="w-[850px] h-80 rounded-3xl mt-[500px] ml-32 flex items-center justify-between">
          <div className="w-[270px] h-[280px] rounded-3xl bg-white"></div>
          <div className="w-[270px] h-[280px] rounded-3xl bg-white"></div>
          <div className="w-[270px] h-[280px] rounded-3xl bg-white"></div>
        </div>
      </motion.div>

      <motion.img
        src="https://yucca.co.za/wp-content/uploads/2025/09/yucca-packaging-homepage-intro-plastic-cups-for-iced-chilled-drinks_mobile.jpg"
        style={{ y: imageY }}
        className="w-full h-[980px] object-cover"
      />
    </div>
  );
}
