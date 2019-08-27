import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryFlag from '../CountryFlag/CountryFlag';



const CountryFlagList = () => {
    const countries = useSelector(({countries}) => countries);
    return (
        <div className="countries-list">
            {countries.map(country => { 
                return (
                <div className="single-country" key={country.id}>
                    <Link to={'countries/country/' + country.id} className='logo' >
                        <CountryFlag imageUrl={country.imageUrl} />
                    </Link>                    
                </div>
                )
            })}
        </div>
    )
}

export default CountryFlagList;