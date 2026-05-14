import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

export default function FAQ() {
    const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -150]);
  return (
    <div className='relativedrf h-screen overflow-hidden'>
        <motion.img
            src="https://yucca.co.za/wp-content/uploads/2025/11/yucca-packaging-agriculture-strawberry-blueberry-gooseberry-grapes-kiwi-avo.jpg"
            style={{ y: imageY }}
            className="w-full h-[980px] object-cover"
        />
    </div>
  )
}
