import {useState, useEffect} from 'react'
// data
import countries from '../data/countries.json';
import meals from '../data/meals.json';
//components
import MealCard from '../components/MealCard';
import MealDetail from '../components/MealDetail';
import MealTypeTabs from '../components/MealTypeTabs';
import CountrySelector from '../components/CountrySelector';
//styles
import '../styles/Info.css';

export default function Info() {
    const [openMeal, setOpenMeal] = useState([]);

    const [mealType, setMealType] = useState("breakfast");

    // State to hold the selected country 
    const [selectedCountry, setSelectedCountry] = useState(null);

    const toggleMeal = (mealId) => {
        setOpenMeal((prevOpenMeal) => 
            prevOpenMeal.includes(mealId) 
                ? prevOpenMeal.filter((id) => id !== mealId) //remove meal if it's already open
                : [...prevOpenMeal, mealId] //add meal if it's not open
        );
    };

    // Get the meal for the selected country in meals.json, default to an empty array if no country is selected
    const countryMeals = selectedCountry ? meals.filter(
        (meal) => meal.countryId === selectedCountry.id) 
        : [];  

    // Filter meals by the selected meal type
    const filteredMeals = countryMeals.filter(
        (meal) => meal.type === mealType
    );
 
    return (
        <>
            <div className="info-page">
                <h1>Healthy Meals by Country</h1>

                <CountrySelector
                    countries={countries}
                    onSelectCountry={setSelectedCountry} 
                 />

                {/*rendering*/}
                {!selectedCountry ? (
                    <p className="empty">
                        Select a country to begin exploring culturally relevant meals
                    </p>
                ) : (
                <div>
                    <h2>{selectedCountry.name} Meals</h2>

                    <MealTypeTabs 
                        mealType={mealType}
                        onChange={setMealType}
                    />

                
                    {filteredMeals.map((meal) => (
                        <MealCard
                            key={meal.id}
                            meal={meal}
                            onToggle={toggleMeal}
                            isOpen={openMeal.includes(meal.id)}
                        />
                    ))}
                </div>
                )}
            </div>
        </>
    )
}
