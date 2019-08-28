import React, { useRef, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import CountryFlag from '../CountryFlag/CountryFlag';
import { searchCountries, deleteCountry } from '../../redux/countriesReducer';



const CountryFlagList = ({ match }) => {
    const countries = useSelector(({countries}) => countries.visibleCountries);
    const inputEl = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchCountries(''));
    },[])
   
    const handleSearch = () => {
        dispatch(searchCountries(inputEl.current.value));
    }

    const removeCountry = (e) => {
        dispatch(deleteCountry(e.target.value))
    }

    return (
        <div>
        {match.path === '/countries' &&
            <input 
                type = "text"
                id = "searchText"
                placeholder="Wyszukaj państwa"
                ref={inputEl}
                onChange={handleSearch}
            />
        }
            <div className="countries-list">
                {countries.map(country => { 
                    return (
                        <div className="single-country" key={country.id}>
                            <Link to={'countries/country/' + country.id} className='logo' >
                                <CountryFlag imageUrl={country.imageUrl} />
                            </Link>
                            <button 
                                className="btnDelete"
                                onClick = { removeCountry }
                                value = {country.id}
                            >X</button>                    
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CountryFlagList;