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

    //search filter
    const [search, setSearch] = useState("")

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

    // Filter searched meals by the selected meal name and ingredient
    const filteredMeals = countryMeals.filter((meal) => {
        const searchLower = search.toLowerCase();

        const matchesName = meal.name
            .toLowerCase()
            .includes(searchLower);
        
        const matchesIngredient = meal.ingredients.some(
            (ingredient) =>
                ingredient.foodId
                    .toLowerCase()
                    .includes(searchLower)
        );

        return meal.type === mealType && (matchesName || matchesIngredient);
    });
 
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

                {/* Controls Together */}
                <div className="controls-bar">
                    <input
                        type="text"
                        placeholder="Search meals or ingredients..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                    {/* Render Meal Cards */}
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
