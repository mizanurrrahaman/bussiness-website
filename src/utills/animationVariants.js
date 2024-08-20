//import { delay } from "framer-motion"

// animationVariants.js

export const fadeIn = (direction = 'up', delay = 0) => {
    return {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        opacity: 0,
        x: direction === 'left' ? 40 : direction === 'right' ?  -40 : 0,
       // x: direction === 'left' ? -100 : 0,
       // y: direction === 'up' ? -100 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
        },
      },
    };
  };
  













{/*


export const fadeIn = (delay, direction )=>{

    return {
      hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        opacity: 0,
        x: direction === 'left' ? 40 : direction === 'right' ?  -40 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity:1,
         transition: {
            type: 'tween',
            duration: 1.2,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
         },

      },
    };
}

*/}