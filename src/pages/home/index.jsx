import { useState, useEffect } from "react"
import DateTimeDisplay from "../../components/DateTimeDisplay";
import News from "../../components/News";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";



export default function Home() {

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true); // Afficher le bouton d'installation
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('L\'utilisateur a accepté l\'installation');
        } else {
          console.log('L\'utilisateur a refusé l\'installation');
        }
        setDeferredPrompt(null);
        setShowInstallButton(false); // Masquer le bouton après l'interaction
      });
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-start items-center">
        <DateTimeDisplay />
      <div className="min-h-[75%] w-full md:w-[80%] flex flex-col justify-start items-start ">   
        <div className="banner p-1 ml-10 h-[20%] w-[85%] lg:w-[96%] rounded-xl mb-4 shadow-xl ">
          <div className=" h-full w-full flex flex-col items-center overflow-hidden">
           
            <h4 className=" text-lg sm:text-xl md:text-2xl xl:text-4xl 3xl:text-5xl text-white mb-1 text-center">Votre Organisateur personnel & numérique</h4>
            <div className="h-[100px] w-full flex justify-center items-center gap-4  mt-2">
              <div className="w-fit h-full text-white text-4xl lg:text-6xl  flex justify-center items-center gap-4 md:gap-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="border border-blue-500 p-1 rounded-xl bg-blue-400 shadow-xl shadow-blue-800 transform-transition duration-300  hover:bg-blue-700 hover:scale-110" /></a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className="border border-blue-500 p-1 rounded-xl bg-blue-400 shadow-xl shadow-blue-800 transform-transition duration-500 hover:bg-blue-700 hover:scale-110"/></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="border border-blue-500 p-1 rounded-xl bg-blue-400 shadow-xl shadow-blue-800 transform-transition duration-500 hover:bg-blue-700 hover:scale-110"/></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="border border-blue-500 p-1 rounded-xl bg-blue-400 shadow-xl shadow-blue-800 transform-transition duration-500 hover:bg-blue-700 hover:scale-110"/></a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"> <AiFillTikTok className="border border-blue-500 p-1 rounded-xl bg-blue-400 shadow-xl shadow-blue-800 transform-transition duration-500 hover:bg-blue-700 hover:scale-110"/></a>
              </div>
              {showInstallButton && (
                <button className=" h-[60%] p-2 bg-red-400 text-white rounded-xl font-bold border border-white" onClick={handleInstallClick}>Installer</button>
              )}
              
            </div>
          </div>
        </div>
        <News/>
      </div>
    </section>
  )
}
