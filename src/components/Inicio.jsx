import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Inicio = () => {
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        const res = await axios('https://restcountries.eu/rest/v2/all');
        const countries = await res.data;
        setCountries(countries);
        console.log(countries)
    }
    
    useEffect(() => {
        getCountries();
    }, [] );
    
    return (
        <div>
            
        </div>
    )
}
