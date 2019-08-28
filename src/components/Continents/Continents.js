import React from 'react';
import { useDispatch } from 'react-redux';
import CountryFlagList from '../CountryFlagList/CountryFlagList';
import { setContinent } from '../../redux/countriesReducer';

const Continents = ({match}) => {
    const dispatch = useDispatch();

    const chooseContinent = e => {
        dispatch(setContinent(e.target.value));
    }

    return (
        <div>
            <select onChange={e => chooseContinent(e)}>
                <option value="Europa">Europa</option>
                <option value="Afryka">Afryka</option>
            </select>
            <CountryFlagList match = { match } />
        </div>
    );
}

export default Continents;