import {useState, useEffect} from 'react'
// data
import countries from '../data/countries.json';
import meals from '../data/meals.json';
//components
import MealCard from '../components/MealCard';
import MealDetail from '../components/MealDetail';
import CountrySelector from '../components/CountrySelector';

export default function Info() {
    const [openMeal, setOpenMeal] = useState([]);

    // State to hold the selected country 
    const [selectedCountry, setSelectedCountry] = useState(null);

    const toggleMeal = (mealId) => {
        setOpenMeal((prevOpenMeal) => 
            prevOpenMeal.includes(mealId) 
                ? prevOpenMeal.filter((id) => id !== mealId) //remove meal if it's already open
                : [...prevOpenMeal, mealId] //add meal if it's not open
        );
    };

    // Get the meal for the selected country, default to an empty array if no country is selected
    const countryMeals = selectedCountry ? meals.filter(
        (meal) => meal.countryId === selectedCountry.id) 
        : []; 

    return (
        <>
            <div className="info-page">
                <h1>Healthy Meals by Country</h1>

                <CountrySelector
                    countries={countries}
                    onSelectCountry={setSelectedCountry} 
                 />

                {countryMeals.map((meal) => (
                    <MealCard
                        key={meal.id}
                        meal={meal}
                        onToggle={toggleMeal}
                        isOpen={openMeal.includes(meal.id)}
                    />
                ))}
            </div>
        </>
    )
}
