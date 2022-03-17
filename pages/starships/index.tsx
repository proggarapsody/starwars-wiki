import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ListsPagesLayout from '../../components/ListsPagesLayout';
import MainLayout from '../../components/MainLayout';
import styles from '../../styles/pages/listspages.module.scss';
import localStyles from './starships.module.scss';
import { useTheme } from 'next-themes';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useRouter } from 'next/router';
import ListItems from '../../components/ListItems';
import Icon from '../../components/icons/Icon';
import { motion } from 'framer-motion';
import { swapiUrl, swapiUrls } from './../../utils/urls';
import { staggerChildVars, staggerContainerVars } from '../../utils/animation.variants';
import WithLoading from '../../hoc/WithLoading';

const Starships = ({
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
  const constraintsRef = useRef(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MainLayout>
      <ListsPagesLayout>
        <motion.div
          className={styles.header}
          ref={constraintsRef}
          variants={staggerContainerVars}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className={localStyles.milleniumImg}
            drag
            dragConstraints={constraintsRef}
            variants={staggerChildVars}
            whileHover={{
              scale: 1.2,
            }}
          >
            <Icon name="millenium" size={209} />
          </motion.div>

          <motion.h1
            className={theme == 'dark' ? styles.darkTitle : styles.title}
            variants={staggerChildVars}
          >
            Starships
          </motion.h1>

          <motion.div
            className={localStyles.starfighterImg}
            drag
            dragConstraints={constraintsRef}
            variants={staggerChildVars}
            whileHover={{
              scale: 1.2,
            }}
          >
            <Icon name="starfighter-black" />
          </motion.div>
        </motion.div>

        <ListItems entitiesData={entitiesData} page={page} type={type} />
      </ListsPagesLayout>
    </MainLayout>
  );
};

export default WithLoading(Starships);

export async function getServerSideProps({ query }: { query: any }) {
  const page = query?.page || 1;

  const res = await fetch(`${swapiUrl}/${swapiUrls.STARSHIPS}/?page=${page}`);

  const entities = await res.json();

  return {
    props: { entitiesData: entities, page, type: swapiUrls.STARSHIPS },
  };
}
