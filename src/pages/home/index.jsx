import DateTimeDisplay from "../../components/DateTimeDisplay";
import News from "../../components/News";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


export default function Home() {
  return (
    <section className="h-screen w-full flex flex-col justify-start items-center">
        <DateTimeDisplay />
      <div className="h-[75%] w-[80%] flex flex-col justify-start items-start ">   
        <div className="p-1 ml-10 h-[20%] w-[85%] lg:w-[96%] bg-blue-200 rounded-xl mb-4 shadow-xl">
          <div className="h-full w-full flex flex-col items-center">
            <h4 className="text-lg sm:text-xl md:text-2xl xl:text-4xl 3xl:text-5xl text-white mb-1 text-center">Votre Organisateur personnel & numérique</h4>
            <div className="h-16 w-full flex justify-center items-center text-4xl lg:text-5xl text-white gap-4 md:gap-6 mt-2">
              <FaFacebookSquare className="border border-blue-500 p-1 rounded-xl bg-blue-700 shadow-xl shadow-white/50" />
              <FaSquareXTwitter className="border border-blue-500 p-1 rounded-xl bg-blue-700 shadow-xl shadow-white/50"/>
              <FaLinkedin className="border border-blue-500 p-1 rounded-xl bg-blue-700 shadow-xl shadow-white/50"/>
              <FaInstagramSquare className="border border-blue-500 p-1 rounded-xl bg-blue-700 shadow-xl shadow-white/50"/>
              <AiFillTikTok className="border border-blue-500 p-1 rounded-xl bg-blue-700 shadow-xl shadow-white/50"/>
              
            </div>
          </div>
        </div>
        <News/>
      </div>
    </section>
  )
}
