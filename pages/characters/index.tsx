import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import ListsPagesLayout from '../../components/ListsPagesLayout';
import MainLayout from '../../components/MainLayout';
import styles from '../../styles/pages/listspages.module.scss';
import localStyles from './characters.module.scss';
import tatooine from '../../public/images/tatooine-mini.png';
import deathStar from '../../public/images/deathstar.png';
import { useTheme } from 'next-themes';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import stylesPagination from '../../styles/components/pagination.module.scss';
import ListItem from '../../components/ListItem';
import ListItems from '../../components/ListItems';
import Icon, { MIcon } from '../../components/icons/Icon';
import { motion } from 'framer-motion';

import {
  sectionVariants,
  staggerChildVars,
  staggerContainerVars,
} from './../../utils/animation.variants';
import { swapiUrl, swapiUrls } from './../../utils/urls';
import WithLoading from '../../hoc/WithLoading';

const Characters = ({
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
            className={localStyles.vaderImg}
            drag
            dragConstraints={constraintsRef}
            variants={staggerChildVars}
            whileHover={{
              scale: 1.2,
            }}
          >
            <MIcon name="darthvader-color" />
          </motion.div>
          <motion.h1
            className={theme == 'dark' ? styles.darkTitle : styles.title}
            variants={staggerChildVars}
          >
            Characters
          </motion.h1>
          <motion.div
            className={localStyles.skywalkerImg}
            drag
            dragConstraints={constraintsRef}
            variants={staggerChildVars}
            whileHover={{
              scale: 1.2,
            }}
          >
            <MIcon name="skywalker-color" />
          </motion.div>
        </motion.div>

        <ListItems entitiesData={entitiesData} page={page} type={type} />
      </ListsPagesLayout>
    </MainLayout>
  );
};

export default WithLoading(Characters);

export async function getServerSideProps({ query }: { query: any }) {
  const page = query?.page || 1;

  const res = await fetch(`${swapiUrl}/${swapiUrls.CHARACTERS}/?page=${page}`);

  const entities = await res.json();

  return {
    props: { entitiesData: entities, page, type: swapiUrls.CHARACTERS },
  };
}
