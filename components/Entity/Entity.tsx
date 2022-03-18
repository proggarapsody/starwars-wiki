import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './entity.module.scss';
import Preloader from '../Preloader';
import { motion } from 'framer-motion';
import {
  staggerContainerVars,
  staggerChildVars,
  creditsVars,
} from '../../utils/animation.variants';
import WithLoading from '../../hoc/WithLoading';
import { getIdFromUrl } from './../../utils/shared';

const Entity = ({
  name,
  description,
  credits,
  setLoading,
  url,
  type,
}: {
  name: string;
  description: Array<any>;
  credits?: string;
  setLoading: CallableFunction;
  url: any;
  type: string;
}) => {
  useEffect(() => {
    setLoading(false);

    console.log();
  }, []);
  const text = `./../../public/images/${type}/${getIdFromUrl(url)}.jpg`;
  const image = import(text);

  return (
    <motion.div
      className={styles.container}
      variants={staggerContainerVars}
      initial="hidden"
      animate="show"
    >
      <motion.div className={styles.image} variants={staggerChildVars}>
        <Image
          src={image.toString()}
          alt="image"
          height={500}
          width={500}
          loader={() => './Preloader'}
        />
      </motion.div>
      <motion.h1 className={styles.name} variants={staggerChildVars}>
        {name}
      </motion.h1>

      {credits && (
        <motion.p className={styles.credits} variants={creditsVars}>
          {credits}
        </motion.p>
      )}

      <motion.p
        className={styles.description}
        variants={staggerContainerVars}
        initial="hidden"
        animate="show"
      >
        {description.map((el, index) => (
          <motion.p key={index} variants={staggerChildVars}>
            {el}
          </motion.p>
        ))}
      </motion.p>
    </motion.div>
  );
};

export default WithLoading(Entity);
