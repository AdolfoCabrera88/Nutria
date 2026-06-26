export default function NutrientBar({ label, value, max, unit, status }) {
    const percentage = Math.min((value /max) * 100, 100)

    return (
        <div className="nutrient">
            <span>{label}: {Number(value).toFixed(1)}{unit} /{Number(max).toFixed(1)}{unit} ({Math.round(percentage)}% )</span>

            <div className="bar">
                <div
                    className={`fill ${status}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    )
}