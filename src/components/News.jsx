import { useEffect, useState } from 'react';
import NewsCard from "./NewsCard";

export default function News() {
  const apiKey = import.meta.env.MEDIA_KEY;
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://api.mediastack.com/v1/news?access_key=${import.meta.env.VITE_MEDIA_KEY}&countries=fr&limit=9`, { next: { revalidate: 3600000 } });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Filtrage des doublons par URL
        const uniqueArticles = [];
        const articleUrls = new Set();

        data.data.forEach((news) => {
          if (!articleUrls.has(news.title)) { // Filtre par URL unique
            articleUrls.add(news.title);
            uniqueArticles.push(news);
          }
        });

        setNewsData({ data: uniqueArticles }); // Met à jour avec les articles filtrés

      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    fetchNews();
  }, [apiKey]);

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div className='min-h-[80%] w-full flex flex-col justify-start items-start rounded-xl '>
      <p className='ml-10 text-3xl text-blue-700'> - DailyNews -</p>
      <article className='p-8 h-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 3xl:gap-8 overflow-auto'>
        {Array.isArray(newsData?.data) ? (
          newsData.data.map((news) => (
            <NewsCard
              key={news.url} // Utilisation de l'URL comme clé
              img={news.image}
              title={news.title}
              description={news.description}
              author={news.author} 
              source={news.source} 
              url={news.url}          
            />
          ))
        ) : (
          <p className='text-slate-600 text-3xl'>Recherche de donnée...</p>
        )}
      </article>
    </div>
  );
}