import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello, my name is Jax Riddell",
            "Developer",
            "Student",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center 
        overflow-hidden'>
            <BackgroundCircles />
            <img 
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://www.ladbible.com/cdn-cgi/image/width=648,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F711fd0b3617187d5f37735fd63077417.jpg" alt=""
            />
            <div className="z-20">
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:6xl font-semibold px-10">
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#f7ab0a"/>
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
  
}