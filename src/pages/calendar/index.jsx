import CalendarComponent from "../../components/CalendarComponent"

export default function Calendar() {
    return (
      <section className="h-screen w-full flex justify-start items-center flex-col">
        <h1 className="mt-10 mb-16 text-3xl md:text-6xl 3xl:text-8xl text-blue-500">CALENDAR</h1>
        <div className="h-[80%] lg:h-[70%] w-[98%] md:w-[80%] banner flex flex-col text-blue-500 p-6 rounded-xl font-bold ">
          <CalendarComponent />
        </div>
      </section>
    )
  }