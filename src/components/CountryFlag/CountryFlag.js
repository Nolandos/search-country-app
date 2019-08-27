import React from 'react';

const CountryFlag = ({ imageUrl }) => {
    return (
        <div className="country-logo-wrapper">
        <img className="country-logo" src={ imageUrl } alt="country photo" />
    </div>
    )
}

export default CountryFlag;