import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

export default function WhatDoIDo({ text }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `end 75%`]
    })
    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    return (
        <div ref={container} className='relative'>
            <p className='c-500 line-h-ex px-10 text-6xl font-semibold absolute block bottom-0'>
                {text}
            </p>
            <motion.p style={{ clipPath: clip }} className='z-1 c-400 line-h-ex px-10 text-6xl font-semibold'>
                {text}
            </motion.p>
        </div>
    )
}
