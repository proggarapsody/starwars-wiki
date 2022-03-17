import React from 'react';
import Entity from '../../components/Entity/Entity';
import vehicleDto from '../../utils/dto/vehicle.dto';
import { swapiUrl, swapiUrls } from '../../utils/urls';
import MainLayout from './../../components/MainLayout';

const Vehicle = ({ entity }: { entity: vehicleDto }) => {
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
          `Manufacturer: ${entity.manufacturer}`,
          `Class: ${entity.vehicle_class}`,
          `Cargo capacity: ${entity.cargo_capacity}`,
        ]}
      />
    </MainLayout>
  );
};

export default Vehicle;

export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(`${swapiUrl}/${swapiUrls.VEHICLES}/${params.id}/`);

  const entity = await res.json();

  return {
    props: { entity }, // will be passed to the page component as props
  };
}
