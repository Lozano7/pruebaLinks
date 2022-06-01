import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/hooksRedux';
import { removeCountry } from '../store/slices/userSelectionSlice';
import { Country } from '../types/api_types/index';

const Header = () => {
  const dispatch = useDispatch();

  const { routeCountries, totalArea } = useAppSelector(
    (state) => state.userSelection
  );

  const deleteCountryRoute = (country: Country) => {
    dispatch(removeCountry(country));
  };
  return (
    <>
      <h1 className='text-center text-2xl font-bold mt-3'>
        Países de Sudamérica
      </h1>
      <div className='flex justify-around items-center mt-5'>
        <div className='text-xl'>
          <span>Ruta: </span>
          {routeCountries.length === 0
            ? 'Selecione un país para iniciar la ruta'
            : routeCountries.map((country) => (
                <span
                  className='cursor-zoom-out font-semibold'
                  key={`${country.name} - ${new Date().toLocaleString()} - ${
                    Math.random() * 1000
                  }`}
                  onClick={() => deleteCountryRoute(country)}
                >
                  {country.name}
                  {routeCountries[routeCountries.length - 1].name !==
                    country.name && '/ '}
                </span>
              ))}
        </div>
        <p className='text-xl'>
          Total Área recorrida:{' '}
          <span className='font-semibold'>{totalArea}</span>
        </p>
      </div>
    </>
  );
};

export default Header;
