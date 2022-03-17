import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ListsPagesLayout from '../../components/ListsPagesLayout';
import MainLayout from '../../components/MainLayout';
import styles from '../../styles/pages/listspages.module.scss';
import localStyles from './films.module.scss';

import { useTheme } from 'next-themes';

import ListItems from '../../components/ListItems';
import Icon from '../../components/icons/Icon';
import { swapiUrl, swapiUrls } from './../../utils/urls';
import { motion } from 'framer-motion';
import { staggerChildVars, staggerContainerVars } from '../../utils/animation.variants';
import WithLoading from '../../hoc/WithLoading';

const Films = ({
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
            Films
          </motion.h1>
        </motion.div>

        <ListItems entitiesData={entitiesData} page={page} type={type} />
      </ListsPagesLayout>
    </MainLayout>
  );
};

export default WithLoading(Films);

export async function getServerSideProps({ query }: { query: any }) {
  const page = query?.page || 1;

  const res = await fetch(`${swapiUrl}/${swapiUrls.FILMS}/?page=${page}`);

  const entities = await res.json();

  return {
    props: { entitiesData: entities, page, type: swapiUrls.FILMS },
  };
}
