'use client';

import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

interface valueProps {
  value: string;
}

/**
 * Animate the enitire paragraph
 */
export const TGOOSParagraph = ({ value }: valueProps) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    // container if you don't specify it will be consider the window as the container
    offset: ['start 0.9', 'start 0.25'] // start of the target & end (90% of the hight of the window) of container (or the window) // start of the target & start (25% starting of the top of the window) of container (or the window)
  });

  return (
    <motion.p
      ref={element}
      className="max-w-7xl p-10 text-5xl"
      style={{ opacity: scrollYProgress }}
    >
      {value}
    </motion.p>
  );
};

// --------------------------------------------------------------------------------

/**
 * Animate word by word
 */
export const TGOOSWord = ({ value }: valueProps) => {
  const element = useRef(null);

  const words = value.split(' ');

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.8', 'start 0.25']
  });
  return (
    <p
      ref={element}
      className="flex max-w-7xl flex-wrap p-10 text-5xl leading-none"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <TGOOSSingleWord
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word}
          </TGOOSSingleWord>
        );
      })}
    </p>
  );
};

const TGOOSSingleWord = ({ children, range, progress }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative m-1.5">
      <span className="absolute opacity-10">{children}</span>{' '}
      {/* <- Shadow */}
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
