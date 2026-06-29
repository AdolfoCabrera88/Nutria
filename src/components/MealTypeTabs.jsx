export default function MealTypeTab({ mealType, onChange }) {
    const types = ["All","Breakfast", "Lunch", "Dinner", "Snack", "Dessert", "Drinks"];

    return (
        <div className="meal-type-tab">
            {types.map((type) => (
                <button
                    key={type}
                    onClick={() => onChange(type)}
                    className={mealType === type ? "active" : ""}
                >
                    {type}
                </button>
            ))}
        </div>
    )
}