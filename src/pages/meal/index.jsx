import MealList from "../../components/MealList";
import { useState } from "react";

export default function Meal() {
    const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  async function getMealData() {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${import.meta.env.VITE_GET_MEAL}&timeFrame=day&targetCalories=${calories}`
      );
      const data = await response.json();
      setMealData(data);
    } catch (error) {
      console.log("error", error);
    }
  }
  
  function handleChange(e) {
    setCalories(e.target.value);
  }


    return (
      <section className="h-screen w-full flex flex-col justify-start items-center">
          <h1 className="mt-10 text-3xl md:text-6xl 3xl:text-8xl text-blue-500 mb-10">MEAL</h1>
        <div className="min-h-[70%] w-[80%] flex flex-col ">
        
            <div className="h-72 w-full flex flex-col items-center justify-center mb-4">
                <h2 className="text-xl italic lg:text-3xl text-blue-500 mb-6">How much calorie for today ?</h2>
                <input
                className="mb-4 h-12 w-60 text-blue-500 bg-blue-100 placeholder-blue-500 p-4 border border-blue-500"
                type="number"
                placeholder="ex: 2000"
                onChange={handleChange}
                />
                <button className="h-14 w-48 bg-blue-500 text-white rounded-xl" onClick={getMealData}>Get Daily Meal Plan</button>
            </div>
            {mealData && <MealList mealData={mealData} />}
            
        </div>
      </section>
    )
  }
  