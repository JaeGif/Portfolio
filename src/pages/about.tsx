import React from 'react';
import Image from 'next/image';
import ImageCarousel from '@/components/about/ImageCarousel';
import DownChevron from '@/components/svg/DownChevron';
import TransitionEffect from '@/components/menu/TransitionEffect';
import { motion } from 'framer-motion';
import Head from 'next/head';

function about() {
  return (
    <>
      <Head>
        <title>J. Gifford | About</title>
        <meta
          name='description'
          content='Description of Jacob Giffords developer career'
        />
      </Head>
      <TransitionEffect />
      <div className='flex flex-col items-center overflow-hidden p-5 gap-5'>
        <h1 className='text-2xl sm:text-[7vw] w-full text-center flex justify-center gap-4 mt-10'>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Build{' '}
          </motion.p>
          <motion.p
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            with{' '}
          </motion.p>{' '}
          <span className='flex gap-0'>
            <motion.p
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              creativity
            </motion.p>
            <motion.p
              initial={{ y: 75, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              .
            </motion.p>
          </span>
        </h1>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col overflow-hidden min-w-[33%] gap-3'>
            <h2 className='text-xl font-bold'>Who am I?</h2>
            <p>
              I&apos;m Jacob, a Full Stack Engineer. I learned web development
              with the Odin Project, and Full Stack Open, from the University of
              Helsinki. I&apos;m extremely passionate about web development and
              driven to succeed and constantly improve my skills. Every project
              I make challenges me in some new way and forces me to grow, and I
              wouldn&apos;t have it any other way.
            </p>
          </div>
          <div className='h-fit w-fit relative border-2 dark:border-white dark:bg-gray-950 bg-white border-gray-950 rounded-3xl m-2'>
            <Image
              height={500}
              width={500}
              src={'/assets/images/punchout.png'}
              alt='picture of Jacob'
              aria-label='Picture of Jacob'
            />
            <div className='absolute top-2 left-2 h-full w-full rounded-3xl dark:bg-white bg-gray-950 -z-10'></div>
          </div>
        </div>
        <div className='relative flex flex-col overflow-hidden min-w-[33%] justify-center items-center'>
          <h2 className='text-xl font-bold'>More than just a developer.</h2>
          <p>
            Outside of full stack development, I dabble in hobbies that help
            fuel my creativity. I take and edit photos with a Canon T6 Rebel,
            Photoshop and Lightroom. I fly a DJI Mavic Mini 2 drone for some
            interesting shots and angles, and I rock climb, solving interesting
            problems. Here&apos;s a selection of some interesting photos
            I&apos;ve taken recently.
          </p>
        </div>
        <ImageCarousel />
      </div>
    </>
  );
}

export default about;
