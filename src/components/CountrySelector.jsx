export default function CountrySelector({ countries, onSelectCountry }) {
    return (
        <div className="country-selector">
            <h2>Select your Country</h2>
            <select onChange={(e) => onSelectCountry(countries.find((c) => c.id === e.target.value))}>
                <option value="">-- Choose a country --</option>
                
                {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                        {country.name}
                    </option>
                ))}
            </select>
        </div>
    )
}