import React from 'react';
import { selectedCountries } from '../../store/slices/userSelectionSlice';
import { Country } from '../../types/api_types';

interface Props {
  selectedCountry: Country;
  handleClickBorders: (border: string) => void;
  getNameCountry: (alphaCode3: string) => string;
}

const InfoSidebarBorder = ({
  selectedCountry,
  getNameCountry,
  handleClickBorders,
}: Props) => {
  return (
    <div className='flex flex-col'>
      <p className='text-center text-sm mt-3'>
        <span className='font-bold'>Fronteras con:</span>
      </p>
      {selectedCountry.borders?.map((border) => (
        <p
          className='text-center text-sm cursor-pointer'
          key={border}
          onClick={() => handleClickBorders(border)}
        >
          <span className='text-base font-semibold'>
            {getNameCountry(border)}
          </span>
        </p>
      ))}
    </div>
  );
};

export default InfoSidebarBorder;
