import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
  url: string;
  type: string;
}) => {
  useEffect(() => {
    setLoading(false);

    console.log(text);
  }, []);

  const text = `/images/${type}/${getIdFromUrl(url)}.jpg`;

  return (
    <motion.div
      className={styles.container}
      variants={staggerContainerVars}
      initial="hidden"
      animate="show"
    >
      <motion.div className={styles.image} variants={staggerChildVars}>
        <Image
          src={text}
          alt="image"
          width="60%"
          height="60%"
          layout="responsive"
          objectFit="cover"
          className={styles.picture}
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
