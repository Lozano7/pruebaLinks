import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/hooksRedux';
import { selectedCountryInitial } from '../store/slices/userSelectionSlice';
import { Country } from '../types/api_types/index';
import ImageCountry from './ImageCountry';
interface Props {
  country: Country;
}
const CardCountries = ({ country }: Props) => {
  const { selectCountry } = useAppSelector((state) => state.userSelection);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(selectedCountryInitial(country));
  };
  const isSelected = country.name === selectCountry.name;
  return (
    <div className='flex justify-center cursor-pointer' onClick={handleClick}>
      <div
        className={`bg-white rounded-lg shadow-lg px-5 py-3 w-full transition duration-300 ${
          isSelected && 'bg-slate-500 order-1'
        } `}
      >
        <ImageCountry url={country.flag} alt={country.name} />
        <div className='text-xl font-bold my-3 text-center'>{country.name}</div>
      </div>
    </div>
  );
};

export default CardCountries;
