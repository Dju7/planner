import TodoElement from "../../components/TodoElement";
import TodoElement1 from "../../components/TodoElement1";

export default function Todo() {
    return (
      <section className="min-h-screen w-full flex flex-col items-center justify-start">
        <h1 className="mt-10 mb-16 text-blue-500 text-3xl md:text-6xl 3xl:text-8xl">TO_DO</h1>
        <div className="min-h-[70vh] lg:h-[70%] w-[80%] flex flex-col lg:flex-row justify-center items-center gap-6 overflow-scroll ">
        
        <TodoElement />
        <TodoElement1/>

      </div>
      </section>
    )
  }