import React from 'react';
import Entity from '../../components/Entity/Entity';
import peopleDto from './../../utils/dto/people.dto';
import MainLayout from './../../components/MainLayout';
import { swapiUrl, swapiUrls } from './../../utils/urls';

const Character = ({ entity }: { entity: peopleDto }) => {
  return (
    <MainLayout>
      <Entity
        name={entity.name}
        url={entity.url}
        type={"characters"}
        description={[
          `Birth year: ${entity.birth_year}`,
          `Eye color: ${entity.eye_color}`,
          `Gender: ${entity.gender}`,
          `Hair color: ${entity.hair_color}`,
          `Height: ${entity.height}`,
          `Mass: ${entity.mass}`,
          `Skin Color: ${entity.skin_color}`,
        ]}
      />
    </MainLayout>
  );
};

export default Character;

export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(`${swapiUrl}/${swapiUrls.CHARACTERS}/${params.id}/`);

  const entity = await res.json();

  return {
    props: { entity }, // will be passed to the page component as props
  };
}
