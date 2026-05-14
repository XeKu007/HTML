import React from 'react'
import { motion } from "framer-motion";

export default function MID() {
    const text = "Not sure what's possible? Get in touch to find out. 🡥"
  return (
    <div className='w-full h-auto relative bg-zinc-50'>
      <section className='w-full h-[200px] gap-28 flex items-center justify-center border-b'>
        <div className='text-6xl'>
            <p>Committed to Execllence, <br /> always innovating</p>
        </div>
        <div className='flex-col text-base'>
            <p>Remarkable packaging is our promise to you. What doesn’t meet <br /> Yucca standards is refined until it does.</p>
            <button className='w-20 h-6 bg-black text-white rounded-[5px] mt-3'>About us</button>
        </div>
      </section>
    <section className='w-full h-[200px] gap-28 flex items-center justify-between border-b'>
        <div className='text-[30px] flex gap-3 ml-36'>
            <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
            <p>Our MIssion</p>
        </div>
        <div className='flex-col text-base mr-32'>
            <p>We provide world-class, compliant packaging from trusted global <br />
            partners to food service, food processing, and agricultural <br />
            businesses across the globe.</p>
        </div>
      </section>
          <section className='w-full h-[200px] gap-28 flex items-center justify-between'>
        <div className='text-[30px] flex gap-3 ml-36'>
            <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
            <p>Our Vision</p>
        </div>
        <div className='flex-col text-base mr-32'>
            <p>To be the trusted, industry-leading packaging supplier, known for <br />
            ethical practices, reliable supply and dedication to sustainable <br />
            innovation.</p>
        </div>
      </section>
      <section className='flex-col pt-44'>
        <div className='flex justify-between h-10 items-end'>
            <p className='ml-32 text-3xl'>New Products</p>
            <button className='mr-32 w-24 h-8 border rounded-[5px]'>Shop now</button>
        </div>
        <div className='w-full h-[350px] flex justify-center gap-10 mt-10'>
            <div className='w-[290px] h-96'>
                <img src="https://yucca.co.za/wp-content/uploads/2025/08/KG-SW-B-250-1200x1200.jpg" alt="" />
                <p className='font-thin'>Single Wall Matte Black Coffee Cup</p>
                <p>From R1.09 <span className='text-[12px]'>incl. vat</span></p>
                <div></div>
            </div>
            <div className='w-[290px] h-96'>
                <img src="https://yucca.co.za/wp-content/uploads/2025/09/KG-CH-2.jpg" alt="" />
                <p className='font-thin'>Paper Pupl Cup Holder</p>
                <p>From R1.55 <span className='text-[12px]'>incl. vat</span></p>
            </div>
            <div className='w-[290px] h-96'>
                <img src="https://yucca.co.za/wp-content/uploads/2025/09/YP-JU9.jpg" alt="" />
                <p className='font-thin'>Dessert Cup</p>
                <p>From R1.38 <span className='text-[12px]'>incl. vat</span></p>
            </div>
            <div className='w-[290px] h-96'>
                <img src="https://yucca.co.za/wp-content/uploads/2025/08/YP-JYF90-1200x1200.jpg" alt="" />
                <p className='font-thin'>Dessert Cup Flat Lid (90mm)</p>
                <p>From R1.63 <span className='text-[12px]'>incl. vat</span></p>
            </div>
        </div>
      </section>
      <section className='w-full h-[550px] overflow-hidden bg-[#12271d] flex relative'>
        <div className=' '>
            <div className='flex-col w-[1000px] h-[300px] text-white ml-28 mt-16'>
                <h1>Custom Solutions</h1>
                <p className='text-5xl mt-10'>Brands that thrive invest in <br />
                custom-designed packaging. Let us <br />
                help bring your vision to life.</p>
            </div>
        </div>
        <div className="absolute bottom-14 w-full overflow-hidden h-36 border-t border-b ">
            <motion.div
                className="flex items-center whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                },
                }}
            >
                {[...Array(4)].map((_, i) => (
                <p key={i} className="text-5xl mr-10 mt-10 text-white">
                    {text}
                </p>
                ))}
            </motion.div>
        </div>

        <img className='w-[700px] h-[700px] -ml-[100px] -mt-[180px]' src="https://yucca.co.za/wp-content/uploads/2025/05/menu.png" alt="" />
      </section>
      <section>
        <div className='w-full h-[800px] bg-white flex justify-center gap-[200px]'>
            <div className='text-[30px] flex flex-col '>
                <h1 className='text-4xl mt-[70px]'>Factory & Product Standards</h1>
                <div className='flex border-b mt-[80px] py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>FDA</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>BRSCGS</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>GRS</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>DIN CERTCO</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>TUV OK Compost industrial</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>ISO 14001</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>ISO 45001</p>
                </div>
            </div>
            <div className='text-[30px]'>
                <p className='text-[13px] mt-[70px]'>Our partners share our commimemnt to responsible practices, so you can trust that every <br /> products is held to the highest standart.</p>
                <div className='flex border-b mt-[80px] py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>EU 10/2011</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>FSC</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>BPI</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>TUV OK Compost Home</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>ISO 9001</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>ISO 22000</p>
                </div>
                <div className='flex border-b py-5 gap-5'>
                    <div className='w-[9px] h-[9px] rounded-[3px] bg-black mt-5'></div>
                    <p>FSSC 22000</p>
                </div>
            </div>
        </div>
      </section>
      <section className='h-[440px] w-full flex justify-around bg-[#f7f4e9] mt-12'>
        <div className='w-[520px] h-400px mt-[50px] pl-[70px]'>
            <p className='text-3xl'>Frequently asked <br /> questions</p>
            <button className='text-white w-[75px] h-[30px] bg-black rounded-[5px] mt-5'>View all</button>
        </div>
        <div className='flex justify-between mt-[50px]'>
            <div className='flex-col w-[520px] h-[400px]  mr-[66px] text-xl'>
                <div className='border-t flex justify-between py-5'>
                    <p>What types packaging do you offer?</p>
                    <p className='font- text-[25px] '>+</p>
                </div>
                <div className='border-t flex justify-between py-5'>
                    <p>Do you deliver natiowide?</p>
                    <p className='font- text-[25px]'>+</p>
                </div>
                <div className='border-t flex justify-between py-5'>
                    <p>Do you deliver globally?</p>
                    <p className='font- text-[25px]'>+</p>
                </div>
                <div className='border-t flex justify-between py-5'>
                    <p>How do i place an order?</p>
                    <p className='font- text-[25px]'>+</p>
                </div>
                <div className='border-t flex justify-between py-5'>
                    <p>Do you offer sustaineble packaging options?</p>
                    <p className='font- text-[25px]'>+</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
