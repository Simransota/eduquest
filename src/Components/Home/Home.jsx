import React from 'react'
import Spline from '@splinetool/react-spline';
// import './App.css'
import Typewriter from "../Typewriter/Typewriter";
import { styles } from '../../styles'
import { Link } from 'react-router-dom'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { services, experiences } from '../../constants'
import { Description } from '@mui/icons-material'
import { useRef } from "react";
import {

    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Who from '../who.jsx/who';

const images = [
    { src: 'https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw', alt: 'Image 1' },
    { src: 'https://logomakerr.ai/blog/wp-content/uploads/2022/08/2019-to-Present-Zara-logo-design-1024x538.jpg', alt: 'Zara logo' },
    { src: 'https://www.svgrepo.com/show/303236/whatsapp-logo.svg', alt: 'Whatsapp logo' },
    { src: 'https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png', alt: 'Shopify logo' },
    { src: 'https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png', alt: 'Amazon logo' },
];

function ParallaxText({ children, baseVelocity = 100, images = [] }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-100, 100, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });
    return (
        <div className="parallax-container relative top-[100px]">
            <div className="parallax" style={{ overflow: "hidden" }}>
                <motion.div className="scroller" style={{ x }}>
                    <div className="flex gap-5">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className='relative top-1 w-[200px] h-[90px]'
                            />
                        ))}
                    </div>
                    <span className={styles.sectionHeadText}>{children} </span>
                </motion.div>
            </div>
        </div>
    );
}
const ServiceCard = ({ index, title, icon, description }) => {
    return (
        <Tilt className="xs:w-[500px]  w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className='bg-white
                     rounded-[20px] p-3 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img src={icon} alt={title} className=' object-contain' />
                    <h3 className='text-black text-[20px] font-bold text-centre'>{title}</h3>
                    <p className='p-2'>{description}</p>
                </div>
            </motion.div>
        </Tilt>
    )
}


export default function Home({ index }) {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Generate quizzes from any text in one click using AI.
                            <span className="hidden sm:block text-4xl"></span>
                        </h2>
                        <div >

                            <h1>
                                For{' '}
                                <Typewriter
                                    words={['hr', 'team', 'students', 'school']}
                                    delay={500}
                                    infinite
                                />
                            </h1>
                        </div>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:bg-blue-600"
                            to="/"
                        >
                            &nbsp; Start Now
                        </Link>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:bg-blue-00 ml-2"
                            to="/"
                        >
                            &nbsp; Contact Sales
                        </Link>
                    </div>
                </div>

                <div className=" absolute right-[200px] inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 " src="https://img.freepik.com/free-vector/salary-payment-concept-illustration-with-man-get-income-his-job_513217-187.jpg?w=740&t=st=1707886797~exp=1707887397~hmac=926de441c61bedda07610e7e50cdb4dc969b18252bca62110add0489edad341f" alt="" />
                </div>
            </aside>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Learning just became easier </p>
                <h2 className={styles.sectionHeadText}>How it works ?</h2>
                
            </motion.div>
            <div className="grid  place-items-center sm:mt-20">
                <div className='mt-20 flex flex-wrap gap-10'>
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>

            </div>
            <section className=''>
                {/* <ParallaxText baseVelocity={-5} images={images}></ParallaxText>
                <div style={{ marginTop: '2rem' }}></div>
                <ParallaxText baseVelocity={5} images={images}></ParallaxText>
            <Spline scene="https://prod.spline.design/b3cF8XCC2dYj4nz6/scene.splinecode" /> */}
            </section>
            <div style={{ marginTop: '5rem' }}></div>
            <p className={styles.sectionSubText}>Quizzes powered by artificial intelligence, tailored to you.</p>
            <h2 className={styles.sectionHeadText}>How it for ?</h2>
            <div className='pl-[200px] pt-[100px] '>
            <Who/>
            </div>
        </div>

    );
}

