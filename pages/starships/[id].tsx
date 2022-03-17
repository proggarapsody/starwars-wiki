import React from 'react';
import Entity from '../../components/Entity/Entity';

import starshipDto from '../../utils/dto/starship.dto';

import MainLayout from './../../components/MainLayout';
import { swapiUrl, swapiUrls } from './../../utils/urls';

const Starship = ({ entity }: { entity: starshipDto }) => {
  return (
    <MainLayout>
      <Entity
        name={entity.name}
        description={[
          `Crew: ${entity.crew}`,
          `Lenght: ${entity.length}`,
          `Cost: ${entity.cost_in_credits}`,
          `Model: ${entity.model}`,
          `Passengers: ${entity.passengers}`,
          `Pilots: ${entity.pilots}`,
          `Max atmosphering speed: ${entity.max_atmosphering_speed}`,
          `Hyperdrive rating: ${entity.hyperdrive_rating}`,
          `Consumables: ${entity.consumables}`,
          `MGLT: ${entity.MGLT}`,
          `Cargo capacity: ${entity.cargo_capacity}`,
          `Class: ${entity.starship_class}`,
        ]}
      />
    </MainLayout>
  );
};

export default Starship;

export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(`${swapiUrl}/${swapiUrls.STARSHIPS}/${params.id}/`);

  const entity = await res.json();

  return {
    props: { entity }, // will be passed to the page component as props
  };
}
