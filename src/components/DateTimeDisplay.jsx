import { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateTime.toLocaleDateString('fr-FR', options);
  const formattedTime = dateTime.toLocaleTimeString('fr-FR');

  return (
    <div className='mb-4 h-[200px] w-full flex flex-col justify-center items-center  rounded-lg text-2xl md:text-3xl lg:text-5xl gap-4 lg:gap-8 text-blue-700'>
      <h1 className='text-2xl md:text-4xl lg:text-6xl 3xl:text-8xl mt-6'>{formattedDate}</h1>  
      <p>{formattedTime}</p>      
     
    </div>
  );
};

export default DateTimeDisplay;