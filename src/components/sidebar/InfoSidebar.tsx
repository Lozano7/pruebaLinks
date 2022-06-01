import React from 'react';
import { Country } from '../../types/api_types';

interface Props {
  text: string;
  countryInfo: number | string;
}

const InfoSidebar = ({ text, countryInfo }: Props) => {
  return (
    <p className='text-center text-sm'>
      <span className='font-bold'>{text}:</span> {countryInfo}
    </p>
  );
};

export default InfoSidebar;
