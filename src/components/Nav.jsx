/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

export default function Nav() {
 const [open, setOpen] = useState(true)
 const [info, setInfo] = useState(false)

 const handleResize = () => {
  if (window.innerWidth <= 768) {
    setOpen(false); // Ferme automatiquement si l'écran est inférieur ou égal à 768px
  } else {
    setOpen(true); // Ouvre automatiquement si l'écran est supérieur à 768px
  }
};

const openModal= () => {
  setInfo(!info)
}

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
          <GiHamburgerMenu className={`text-3xl text-blue-500  transition-transform duration-500 hover:text-red-400 ${open ? '' : 'rotate-90'}`} onClick={handleBar}/>
        </div>
        <div
        className={`
          ${open ? 'translate-x-0' : '-translate-x-full'} 
          transition-transform duration-500
          h-[350px] w-full pr-1 flex flex-col justify-center items-center gap-10 rounded-tr-lg rounded-br-lg bg-gray-100 shadow-xl text-sky-400 border-t border-r border-b border-blue-500
        `}
      >
        <NavLink to='/'><FaHome className="text-3xl text-blue-600 transform-transition duration-300 hover:scale-110 hover:text-red-400" /></NavLink>
        <NavLink to='/calendar'><FaCalendarAlt className="text-3xl text-blue-600 transform-transition duration-300 hover:scale-110 hover:text-red-400" /></NavLink>
        <NavLink to='/todo'><FaSquareCheck className="text-3xl text-blue-600 transform-transition duration-300 hover:scale-110 hover:text-red-400" /></NavLink>
        <NavLink to='/meal'><GiHotMeal className="text-3xl text-blue-600 transform-transition duration-300 hover:scale-110 hover:text-red-400" /></NavLink>
      </div>
        
        <div className="h-16 w-full flex justify-start md:justify-center items-center">
        <FaQuestion className="text-blue-500 text-2xl md:text-3xl cursor-pointer ml-1 md:ml-0 hover:text-red-400" onClick={openModal} />
        </div> 
        
          <div className={`fixed bottom-0 left-16 z-30 h-[250px] w-[300px] p-2 rounded-tr-xl border-4 border-blue-500 flex flex-col justify-start items-start rounded-tl-xl bg-white/90 transition-transform duration-500 ${info ? 'translate-y-0' : 'translate-y-full'}`}>
             <p className="text-xl mb-2">Informations</p>
             <p className="text-sm mb-2">Toutes les données entrées sont enregistrées dans le navigateur et ne sont pas synchronisées sur d'autres appareils ou navigateurs.</p>
             <p className="text-sm">Vous pouvez importer sur votre bureau ou ecran d'accueil, une icône pour l'utiliser comme une application</p>
             <p className="text-sm">Pour cela, cliquer sur la petit icone à droite de la barre d'url</p>

          </div>
     
        

      
    </nav>
  )
}
