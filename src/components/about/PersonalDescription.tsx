import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function PersonalDescription() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col sm:flex-row items-center'>
        <span className='flex flex-col gap-3 w-fit'>
          <h2 className='text-2xl font-bold text-blue-400 w-fit'>Who am I?</h2>
          <p className='sm:w-[50vw] text-lg'>
            I&apos;m Jacob, a Full Stack Engineer with a passion for building
            beautiful user-centric applications. I&apos;m constantly learning
            new technologies and finding interesting UI designs and making them
            my own.
          </p>
          <p className='text-lg'>
            I learned web development with the Odin Project, and Full Stack
            Open, from the University of Helsinki. I&apos;m extremely passionate
            about web development and driven to succeed and constantly improve
            my skills. Every project I make challenges me in some new way and
            forces me to grow, and I wouldn&apos;t have it any other way.
          </p>
          <p className='text-lg'>
            If you&apos;re interested in checking out my other projects, feel
            free to head off to my{' '}
            <Link
              className='cursor-pointer'
              href={'https://github.com/JaeGif'}
              target='_blank'
            >
              <em className='cursor-pointer not-italic text-blue-500'>
                GitHub
              </em>
            </Link>{' '}
            and{' '}
            <Link
              className='cursor-pointer'
              href={'https://www.linkedin.com/in/jacob-gifford-dev/'}
              target='_blank'
            >
              {' '}
              <em className='cursor-pointer not-italic text-blue-500'>
                LinkedIn
              </em>
            </Link>{' '}
            pages. Nearly all of my finished projects and experience are public.
          </p>
        </span>
        <div className='h-full w-full flex justify-center items-center'>
          <div className='sm:max-w-[50vw] h-full'>
            <Image
              height={500}
              width={500}
              src={'/assets/images/punchout-light.png'}
              alt='picture of Jacob'
              aria-label='Picture of Jacob'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDescription;
