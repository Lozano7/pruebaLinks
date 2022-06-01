import React from 'react';
import { Country } from '../types/api_types/index';
import CardCountries from './CardCountries';

interface Props {
  countries: Country[];
}

const GridCountries = ({ countries }: Props) => {
  return (
    <div className='grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 xl:grid-cols-4'>
      {countries.map((country) => (
        <CardCountries
          key={`${country.name} - ${new Date().toLocaleString()}`}
          country={country}
        />
      ))}
    </div>
  );
};

export default GridCountries;
