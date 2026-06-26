export  function getNutrientStatus(type, value) {
    switch(type){
    case "protein":
        if (value < 20) return "red"
        if (value < 40) return "yellow"
        return "green"

    case "calories":
        if (value < 300) return "yellow"
        if (value <= 700) return "green"
        return "red"

    case "carbs":
        if (value < 30) return "yellow"
        if (value <= 80) return "green"
        return "red"

    case "fat":
        if (value < 10) return "yellow"
        if (value <= 25) return "green"
        return "red"

    case "fiber":
        if(value < 10) return "yellow"
        if(value <= 25) return "green"
        return "red"

    default:
        return "yellow"
    }
} 

export function getMealScore(food) {
        let score = 0

        if (food.protein >= 25) score++
        if (food.calories <= 700) score++
        if (food.carbs >= 25) score++
        if (food.fat <= 25) score++
        if (food.fiber >= 5) score++

        if (score >= 3) return "green"
        if (score === 2) return "yellow"
        return "red"
    }