/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${import.meta.env.VITE_GET_MEAL}&includeNutrition=false`
        );
        const data = await response.json();
        setImageUrl(data.image);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchData();
  }, [meal.id]);

  return (
    <article className="flex flex-col items-center justify-center p-4 bg-blue-200 rounded-xl shadow-xl">
      <h3 className="w-72 overflow-hidden whitespace-nowrap text-ellipsis mb-1 text-lg text-blue-500 font-bold">{meal.title}</h3>
      <img src={imageUrl} alt="recipe" className="h-[350px] w-[350px] object-cover" />
      <ul className="flex flex-col mb-2">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a className="h-8 w-32 bg-blue-500 text-white flex justify-center items-center rounded-xl p-1" href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}


