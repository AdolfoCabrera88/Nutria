import food from "../data/foods.json";

export function calculateMealNutrition(ingredients, foods) {
    const totals = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        fiber: 0,
    };

    ingredients.forEach((ingredient) => {

        const food = foods.find(
            (food) => food.id === ingredient.foodId
        );

        if (!food) return;

        const factor = ingredient.grams / 100;

        totals.calories += food.per100g.calories * factor;
        totals.protein += food.per100g.protein * factor;
        totals.carbs += food.per100g.carbs * factor;
        totals.fat += food.per100g.fat * factor;
        totals.fiber += food.per100g.fiber * factor;
    });

    return {
        calories: Number(totals.calories.toFixed(1)),
        protein: Number(totals.protein.toFixed(1)),
        carbs: Number(totals.carbs.toFixed(1)),
        fat: Number(totals.fat.toFixed(1)),
        fiber: Number(totals.fiber.toFixed(1)),
    };
}