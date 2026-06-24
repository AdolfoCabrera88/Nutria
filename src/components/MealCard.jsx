import MealDetail from './MealDetail';

export default function MealCard({ meal, onToggle, isOpen }) {
  return (
    <div className="meal-card">
      <h3>{meal.name}</h3>

      {/* Button For Details */}
      <button onClick={() => onToggle(meal.id)}>
        {isOpen ? "Hide Details" : "Show Details"}
      </button>

        {isOpen && <MealDetail meal={meal} />}
    </div>
  );
}