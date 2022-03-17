import React from 'react';
import Entity from '../../components/Entity/Entity';
import filmDto from '../../utils/dto/film.dto';
import planetDto from '../../utils/dto/planet.dto';

import MainLayout from './../../components/MainLayout';
import { swapiUrl, swapiUrls } from './../../utils/urls';

const Planet = ({ entity }: { entity: planetDto }) => {
  return (
    <MainLayout>
      <Entity
        name={entity.name}
        description={[
          `Population: ${entity.population}`,
          `Terrain: ${entity.terrain}`,
          `Orbital period: ${entity.orbital_period}`,
          `Surface water: ${entity.surface_water}`,
          `Rotation period: ${entity.rotation_period}`,
        ]}
      />
    </MainLayout>
  );
};

export default Planet;

export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(`${swapiUrl}/${swapiUrls.PLANETS}/${params.id}/`);

  const entity = await res.json();

  return {
    props: { entity }, // will be passed to the page component as props
  };
}
