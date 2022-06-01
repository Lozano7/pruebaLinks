import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooksRedux';
import { addCountry } from '../../store/slices/userSelectionSlice';
import { Country } from '../../types/api_types';
import ImageCountry from '../ImageCountry';
import InfoSidebar from './InfoSidebar';
import InfoSidebarBorder from './InfoSidebarBorder';

interface Props {
  countries: Country[];
}

const SideBar = ({ countries }: Props) => {
  const { selectCountry } = useAppSelector((state) => state.userSelection);
  const dispatch = useDispatch();
  const handleClickBorders = (border: string) => {
    const country = countries.find((country) => country.alpha3Code === border);
    if (country) {
      dispatch(addCountry(country));
    }
  };
  const getNameCountry = (alphaCode3: string) => {
    const country = countries.find(
      (country) => country.alpha3Code === alphaCode3
    );
    return country ? country.name : '';
  };
  return (
    <div className='min-h-96 items-center justify-center min-w-[250px] bg-slate-50 py-5 px-2 rounded'>
      <ImageCountry url={selectCountry.flag} alt={selectCountry.name} />
      <div className='w-full'>
        <h2 className='text-xl font-bold my-3 text-center'>
          {selectCountry.name}
        </h2>
        <InfoSidebar text='Capital' countryInfo={selectCountry.capital} />
        <InfoSidebar text='Población' countryInfo={selectCountry.population} />
        <InfoSidebar
          text='Código telf'
          countryInfo={selectCountry.numericCode}
        />
        <InfoSidebar
          text='Área'
          countryInfo={selectCountry.area || 'Desconocida'}
        />
        {selectCountry.borders?.length > 0 && (
          <InfoSidebarBorder
            getNameCountry={getNameCountry}
            selectedCountry={selectCountry}
            handleClickBorders={handleClickBorders}
          />
        )}
      </div>
    </div>
  );
};

export default SideBar;
