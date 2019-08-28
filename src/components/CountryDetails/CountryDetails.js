import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../../redux/countriesReducer';

const CountrtDetails = ({match}) => {
    const dispatch = useDispatch();
    const selectedCountry = useSelector(({countries}) => countries.selectedCountry);

    useEffect(() => {
        const id = parseInt(match.params.id)
        dispatch(getCountry(id));
    },[])
  
    return (
        <div className="country-wrapper">
        <header>
            <img className="country-photo" src={selectedCountry.imageUrl} alt="country photo" />
        </header>
        <div className="country-info">
            <h1>{selectedCountry.name}</h1>
            <h2>Kontynent: {selectedCountry.continent}</h2>

            <div className="info">
                <div>
                    <span>{selectedCountry.populace}</span>
                    <span>Ludność[mln]</span>
                </div>

                <div>
                    <span>{selectedCountry.capital}</span>
                    <span>Stolica</span>
                </div>

                <div>
                    <span>{selectedCountry.currency}</span>
                    <span>Waluta</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CountrtDetails;