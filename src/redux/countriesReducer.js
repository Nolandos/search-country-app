import countriesData from '../data/countries.json';

//SELECTORS

//ACTION TYPES
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

//ACTIONS CREATORS
export const getCountries = () => ({type: GET_COUNTRIES});
export const getCountry = (id) => ({type: GET_COUNTRIES, id});
export const deleteCountry = (id) => ({type: DELETE_COUNTRY, id});
export const searchCountries = (searchText) => ({type: SEARCH_COUNTRIES, searchText});
export const setContinent = (name) => ({type: SET_CONTINENT, name});

//REDUCER
export default function countriesReducer(state = countriesData, action={}) {
    switch(action.type) {
        case GET_COUNTRIES:
            return {...state, countries: state.countries};
        case GET_COUNTRY:
            return state.filter(country => country.id === action.id);
        case DELETE_COUNTRY:
            return state.filter(country => country.id !== action.id);
        case SET_CONTINENT:
            return state.filter(continent => continent.name === action.name); 
        default: 
            return state;
    }
}