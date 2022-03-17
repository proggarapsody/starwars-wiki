import React from 'react';
import Entity from '../../components/Entity/Entity';
import filmDto from '../../utils/dto/film.dto';

import MainLayout from './../../components/MainLayout';
import { swapiUrl, swapiUrls } from './../../utils/urls';

const Film = ({ entity }: { entity: filmDto }) => {
  return (
    <MainLayout>
      <Entity
        name={entity.title}
        credits={`${entity.opening_crawl}`}
        description={[
          `Director: ${entity.director}`,
          `№ episode: ${entity.episode_id}`,
          `Producers: ${entity.producer}`,
          `Release data: ${entity.release_date}`,
        ]}
      />
    </MainLayout>
  );
};

export default Film;

export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(`${swapiUrl}/${swapiUrls.FILMS}/${params.id}/`);

  const entity = await res.json();

  return {
    props: { entity }, // will be passed to the page component as props
  };
}
