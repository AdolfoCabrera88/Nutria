import { calculateMealNutrition } from "../utils/calculateNutrition";
import { getNutrientStatus, getMealScore } from "../utils/nutrition";
import NutrientBar from "./NutrientBar";
import foods from "../data/foods.json";

export default function MealDetail({ meal }) {

  const nutrients = calculateMealNutrition(meal.ingredients, foods)

  const { calories, protein, carbs, fat, fiber } = nutrients

  const proteinStatus = getNutrientStatus("protein", protein)
  const caloriesStatus = getNutrientStatus("calories", calories)
  const carbsStatus = getNutrientStatus("carbs", carbs)
  const fatStatus = getNutrientStatus("fat", fat)
  const fiberStatus = getNutrientStatus("fiber", fiber)

  //MealScore
  const mealScore = getMealScore(nutrients)

  if (!meal) return <p>Select a meal to see details</p>

  return (
    <div className="meal-detail">
        <h2>{meal.name}</h2>

        <h3>Ingredients:</h3>
          <ul>
           {meal.ingredients.map((ingredient) => {

              const food = foods.find(
                (food) => food.id === ingredient.foodId
              );

              return (
                <li key={ingredient.foodId}>
                  {food?.name} - {ingredient.grams} g
                </li>
              );
            })}
          </ul>

          <h3>Nutrients:</h3>
            <p className="context">
              Nutritional values are estimated per meal
            </p>

            <NutrientBar
                label="Protein"
                value={protein}
                max={50}
                unit="g"
                status={proteinStatus}
            />

            <NutrientBar
                label="Calories"
                value={calories}
                max={800}
                unit="kcal"
                status={caloriesStatus}
            />
            <NutrientBar
                label="Carbs"
                value={carbs}
                max={90}
                unit="g"
                status={carbsStatus}
            />
            <NutrientBar
                label="Fat"
                value={fat}
                max={35}
                unit="g"
                status={fatStatus}
            />
            <NutrientBar
                label="Fiber"
                value={fiber}
                max={35}
                unit="g"
                status={fiberStatus}
            />

            <p className={mealScore}>
                Overall: {mealScore === "green" ? "Healthy" :
                          mealScore === "yellow" ? "Moderate" :
                          "Needs Imporvement"}
            </p>
    </div>
  );
}