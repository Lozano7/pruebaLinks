import { useRef } from 'react';
import GridCountries from '../components/GridCountries';
import Header from '../components/Header';
import SideBar from '../components/sidebar/SideBar';
import Spinner from '../components/Spinner';
import { useAppSelector } from '../hooks/hooksRedux';
import useAxiosFetch from '../hooks/useAxios';
import { Country } from '../types/api_types/index';

const HomeScreen = () => {
  const { data, isLoading, fetchError } = useAxiosFetch(
    'https://restcountries.com/v2/regionalbloc/usan'
  );
  const { isShowDescription } = useAppSelector((state) => state.userSelection);

  return (
    <div className='min-h-screen'>
      <Header />
      {isLoading ? (
        <div className='flex w-full justify-center mt-7'>
          <Spinner />
        </div>
      ) : (
        <div className='flex justify-between mt-5'>
          <GridCountries countries={data} />
          {isShowDescription && <SideBar countries={data} />}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
