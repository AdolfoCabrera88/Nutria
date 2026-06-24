import {useState, useEffect} from 'react'
// data
import countries from '../data/countries.json';
//components
import CountrySelector from '../components/CountrySelector';

export default function Info() {

    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <>
            <div className="info-page">
                <h1>Healthy Meals by Country</h1>

                <CountrySelector
                    countries={countries}
                    onSelectCountry={setSelectedCountry} 
                 />
            </div>
        </>
    )
}
