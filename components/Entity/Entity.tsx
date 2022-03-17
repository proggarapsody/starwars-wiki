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

const Entity = ({
  name,
  description,
  credits,
  setLoading,
}: {
  name: string;
  description: Array<any>;
  credits?: string;
  setLoading: CallableFunction;
}) => {
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <motion.div
      className={styles.container}
      variants={staggerContainerVars}
      initial="hidden"
      animate="show"
    >
      <motion.div className={styles.image} variants={staggerChildVars}>
        <Image
          src={`https://www.google.com/search?q=${name}&source=lnms&tbm=isch`}
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

export async function getStaticProps({ query }: { query: any }) {
  const page = query?.name || 1;

  const res = await fetch(`https://www.google.com/search?q=${name}&source=lnms&tbm=isch`);

  const entities = await res.json();

  return {
    props: { entitiesData: entities, page }, // will be passed to the page component as props
  };
}
