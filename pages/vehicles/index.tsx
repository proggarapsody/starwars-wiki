import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ListsPagesLayout from '../../components/ListsPagesLayout';
import MainLayout from '../../components/MainLayout';
import styles from '../../styles/pages/listspages.module.scss';
import localStyles from './vehicles.module.scss';
import tatooine from '../../public/images/tatooine-mini.png';
import { swapiUrl, swapiUrls } from './../../utils/urls';
import { useTheme } from 'next-themes';

import ListItems from '../../components/ListItems';
import Icon, { MIcon } from '../../components/icons/Icon';
import { motion } from 'framer-motion';
import {
  imgVariants,
  staggerChildVars,
  staggerContainerVars,
} from '../../utils/animation.variants';
import WithLoading from '../../hoc/WithLoading';

const Vehicles = ({
  entitiesData,
  page,
  type,
  setLoading,
}: {
  entitiesData: any;
  page: any;
  type: string;
  setLoading: CallableFunction;
}) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MainLayout>
      <ListsPagesLayout>
        <motion.div
          className={styles.header}
          variants={staggerContainerVars}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className={theme == 'dark' ? styles.darkTitle : styles.title}
            variants={staggerChildVars}
          >
            Vehicles
          </motion.h1>
        </motion.div>

        <motion.div
          className={localStyles.atatMiniImg}
          variants={imgVariants}
          initial="hidden"
          custom={1.5}
          animate="show"
        >
          <MIcon name="atat-mini" />
        </motion.div>
        <motion.div
          className={localStyles.atatImg}
          variants={imgVariants}
          initial="hidden"
          custom={2.5}
          animate="show"
        >
          <MIcon name="atat" />
        </motion.div>
        <ListItems entitiesData={entitiesData} page={page} type={type} />
      </ListsPagesLayout>
    </MainLayout>
  );
};

export default WithLoading(Vehicles);

export async function getServerSideProps({ query }: { query: any }) {
  const page = query?.page || 1;

  const res = await fetch(`${swapiUrl}/${swapiUrls.VEHICLES}/?page=${page}`);

  const entities = await res.json();

  return {
    props: { entitiesData: entities, page, type: swapiUrls.VEHICLES }, // will be passed to the page component as props
  };
}
