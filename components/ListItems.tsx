import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import MListItem from './ListItem';
import SearchBox from './SearchBox/SearchBox';
import styles from '../styles/pages/listspages.module.scss';
import stylesPagination from '../styles/components/pagination.module.scss';
import { motion } from 'framer-motion';
import { staggerContainerVars } from './../utils/animation.variants';
import { swapiUrl } from './../utils/urls';
import Preloader from './Preloader';

const ListItems = ({
  entitiesData,
  page,
  type,
}: {
  entitiesData: any;
  page: any;
  type: string;
}) => {
  const [entities, setEntities] = useState([]);
  const router = useRouter();
  const userListRef = useRef(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const searchRef = useRef(null) as React.MutableRefObject<HTMLInputElement | null>;

  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    // Router event handler
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
    };
  }, []);

  useEffect(() => {
    if (entitiesData) {
      console.log(entitiesData);

      if (entitiesData.error) {
      } else {
        setEntities(entitiesData.results);
      }
    }
  }, [entitiesData]);

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(`${swapiUrl}/${type}/?search=${query}`)
        .then((res) => res.json())
        .then((res) => {
          setEntities(res.results);
        });
    } else {
      setEntities(entitiesData.results);
    }
  }, []);

  const onFocus = () => {
    setActive(true);
    window.addEventListener('click', onClick);
  };

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      setQuery('');
      setEntities(entitiesData.results);
      window.removeEventListener('click', onClick);
    }
  }, []);

  const handlePagination = (page: any) => {
    const path = router.pathname;
    const query = router.query;
    query.page = page.selected + 1;
    router.push({
      pathname: path,
      query: query,
    });
    // if (userListRef) {
    //   userListRef.current.scrollIntoView();
    // }
  };

  return (
    <>
      <div className={styles.searchboxBlock}>
        <SearchBox onChange={onChange} onFocus={onFocus} />
      </div>

      <section className={styles.list}>
        <motion.ul
          ref={userListRef}
          variants={staggerContainerVars}
          initial="hidden"
          animate="show"
        >
          {entities?.map((entity: any, index) => {
            return (
              <MListItem key={index} href={`${router.pathname}/${entity.url.split('/')[5]}`}>
                {entity.name || entity.title}
              </MListItem>
            );
          })}
        </motion.ul>
        {loading && <Preloader />}
      </section>

      <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        initialPage={page - 1}
        pageCount={entitiesData.count / 10}
        onPageChange={handlePagination}
        containerClassName={stylesPagination.pagWrap}
        pageClassName={stylesPagination.pagLi}
        pageLinkClassName={stylesPagination.pagA}
        activeClassName={stylesPagination.pagActive}
        nextLinkClassName={stylesPagination.pagNext}
        previousLinkClassName={stylesPagination.pagPrev}
        breakLinkClassName={stylesPagination.pagBreak}
        disabledClassName={stylesPagination.pagDisable}
      />
    </>
  );
};

export default ListItems;
