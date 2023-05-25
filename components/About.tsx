import { motion } from 'framer-motion';
import React from 'react'
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
            initial={{
             x: -200,
             opacity: 0,
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{ x: 0, opacity: 1, }}
            viewport={{ once:  true }}
            src='https://www.ladbible.com/cdn-cgi/image/width=648,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F711fd0b3617187d5f37735fd63077417.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold '>
            Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background
          </h4>
          <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem consequuntur aliquam necessitatibus autem, repudiandae aut libero magnam reiciendis nemo? Voluptate molestiae ipsam facilis mollitia aliquid nesciunt tenetur porro ducimus?</p>
        </div>
    
    
    </motion.div>
  );   
}