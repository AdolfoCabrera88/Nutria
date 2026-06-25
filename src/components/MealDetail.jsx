export default function MealDetail({ meal }) {
  return (
    <div className="meal-detail">
        <h2>{meal.name}</h2>

        <h3>Ingredients:</h3>
          <ul>
            {meal.ingredients.map((ingredients, i) => (
                <li key={i}>
                  {ingredients.name} - {ingredients.grams}g
                </li>
            ))}
          </ul>

          <h3>Nutrients:</h3>
            <p className="context">
              Nutritional values are estimated per meal
            </p>
      
    </div>
  );
}