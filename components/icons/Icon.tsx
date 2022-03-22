import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import svgSprites from './sprites.svg';

const Icon: React.FC<any> = React.forwardRef(
  ({ name, color, size, className, onClick }, ref: any) => {
    useEffect(() => console.log(name, []));

    return (
      <svg
        className={`icon icon-${name} ${className}`}
        fill={color}
        stroke={color}
        onClick={onClick}
      >
        <motion.use
          width="100%"
          height="100%"
          xlinkHref={`${svgSprites.src}#icon-${name}`}
          ref={ref}
          whileFocus={{
            filter: 'drop-shadow( 3px 3px 2px var(--neon-color))',
            boxShadow: '0px 0px 25px 15px var(--neon-color)',
          }}
        />
      </svg>
    );
  }
);
export const MIcon = motion(Icon);
export default Icon;
