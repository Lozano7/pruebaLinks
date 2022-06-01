import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { AppDispatch } from '../index';
import { Country } from '../../types/api_types/index';

// Define a type for the slice state
interface UserSelectionState {
  routeCountries: Country[];
  isShowDescription: boolean;
  selectCountry: Country;
  totalArea: number;
}

// Define the initial state using that type
const initialState: UserSelectionState = {
  routeCountries: [],
  isShowDescription: false,
  selectCountry: {} as Country,
  totalArea: 0,
};

export const userSelectedSlice = createSlice({
  name: 'userSelection',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    selectedCountryInitial(state, action: PayloadAction<Country>) {
      state.routeCountries = [action.payload];
      state.isShowDescription = true;
      state.selectCountry = action.payload;
      state.totalArea = action.payload.area;
    },
    addCountry(state, action: PayloadAction<Country>) {
      state.routeCountries.push(action.payload);
      state.totalArea += action.payload.area || 0;
      state.selectCountry = action.payload;
    },
    removeCountry(state, action: PayloadAction<Country>) {
      state.routeCountries = state.routeCountries.filter(
        (country) => country.name !== action.payload.name
      );
      state.totalArea -= action.payload.area;
      state.selectCountry =
        state.routeCountries.length > 0
          ? state.routeCountries[state.routeCountries.length - 1]
          : ({} as Country);
      if (state.routeCountries.length === 0) {
        state.isShowDescription = false;
      }
    },
  },
});

export const { selectedCountryInitial, addCountry, removeCountry } =
  userSelectedSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectedCountries = (state: RootState) =>
  state.userSelection.routeCountries;

export default userSelectedSlice.reducer;
