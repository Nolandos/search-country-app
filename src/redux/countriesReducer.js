import countries from '../data/countries.json';

//SELECTORS

//ACTION TYPES
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

//ACTIONS CREATORS
export const getCountries = () => ({type: GET_COUNTRIES});
export const getCountry = (id) => ({type: GET_COUNTRY, id});
export const deleteCountry = (id) => ({type: DELETE_COUNTRY, id});
export const searchCountries = (searchText) => ({type: SEARCH_COUNTRIES, searchText});
export const setContinent = (name) => ({type: SET_CONTINENT, name});

const initialState = {
    countries,
    selectedCountry: {},
    visibleCountries: []
}

//REDUCER
export default function countriesReducer(state = initialState, action={}) {
    switch(action.type) {
        case GET_COUNTRIES:
            return {...state, countries: state.countries};
        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id === action.id);
            return {...state, selectedCountry: selectedCountry};
        case SEARCH_COUNTRIES:
            const visibleCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return {...state, visibleCountries: visibleCountries}
        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id !== parseInt(action.id));
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id !== parseInt(action.id));
            return {...state, countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries};
        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return {...state, visibleCountries: continentCountries};
        default: 
            return state;
    }
}