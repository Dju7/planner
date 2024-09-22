import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";

export default function Nav() {
 const [open, setOpen] = useState(true)

 const handleResize = () => {
  if (window.innerWidth <= 768) {
    setOpen(false); // Ferme automatiquement si l'écran est inférieur ou égal à 768px
  } else {
    setOpen(true); // Ouvre automatiquement si l'écran est supérieur à 768px
  }
};

useEffect(() => {
  // Vérifie la taille de l'écran à l'initialisation
  handleResize();

  // Ajoute un écouteur pour surveiller les changements de taille de l'écran
  window.addEventListener("resize", handleResize);

  // Nettoie l'écouteur d'événement lors du démontage du composant
  return () => window.removeEventListener("resize", handleResize);
}, []);

 const handleBar = (e) => {
  e.preventDefault()
  setOpen(!open)
 }

  return (
    <nav className='fixed z-10 left-0 h-full w-16  flex flex-col justify-between'>
        <div className="h-16 w-full flex justify-center items-center">
          <GiHamburgerMenu className={`text-3xl text-blue-500  transition-transform duration-500 ${open ? '' : 'rotate-90'}`} onClick={handleBar}/>
        </div>
        <div
        className={`
          ${open ? 'translate-x-0' : '-translate-x-full'} 
          transition-transform duration-500
          h-[350px] w-full pr-1 flex flex-col justify-center items-center gap-10 rounded-tr-lg rounded-br-lg bg-gray-100 shadow-xl text-sky-400 border-t border-r border-b border-blue-500
        `}
      >
        <NavLink to='/'><FaHome className="text-3xl text-blue-600" /></NavLink>
        <NavLink to='/calendar'><FaCalendarAlt className="text-3xl text-blue-600" /></NavLink>
        <NavLink to='/todo'><FaSquareCheck className="text-3xl text-blue-600" /></NavLink>
        <NavLink to='/meal'><GiHotMeal className="text-3xl text-blue-600" /></NavLink>
      </div>
        
        <div className="h-16 w-full flex justify-center items-center">
        <MdEmail className="text-blue-500 text-3xl" />

        </div>  

      
    </nav>
  )
}
