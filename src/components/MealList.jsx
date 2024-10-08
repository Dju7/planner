/* eslint-disable react/prop-types */

import Meal from "./Meal";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <div className="min-h-[750px]">
      <div className="h-[15%] w-full flex flex-col justify-center items-center mb-6">
        <div className="h-full w-full md:w-[80%] flex justify-center items-center text-xl text-white banner rounded-xl">
            <ul className="text-xl md:text-2xl w-full md:w-[60%] h-full flex flex-col lg:flex-row justify-around items-start md:items-center p-4">
                <li>Calories: {nutrients.calories.toFixed(0)}kcal</li>
                <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                <li>Fat: {nutrients.fat.toFixed(0)}</li>
                <li>Protein: {nutrients.protein.toFixed(0)}</li>
            </ul>
        </div>
      </div>

      <div className="min-h-[70%] w-full flex flex-col lg:flex-row gap-10 items-center justify-center overflow-x-hidden">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </div>
    </div>
  );
}
