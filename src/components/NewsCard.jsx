
// eslint-disable-next-line react/prop-types
const NewsCard= ({ title, img, source, description, url, }) => {
    return (
      <a href={url} target="_blank">
      <div className='h-full 3xl:h-[300px] w-full flex flex-col md:flex-row text-slate-800 p-2 bg-blue-200 border border-blue-100 hover:bg-transparent hover:border-blue-500 rounded-lg 3xl:gap-6 shadow-xl'>
        <div className='h-[50%] md:h-full w-full md:w-[50%] flex flex-col m-2 overflow-hidden'>
          {img && <img alt='pictures of article' src={img} className="h-[260px] w-full object-cover" />}
        </div>
        <div className='h-full w-full md:w-[50%] flex flex-col justify-between overflow-hidden'>
            <h3 className='text-md font-bold  '>{title}</h3>
            <p className=' text-sm w-[90%] '>{description}</p>
            <p className='text-sm text-right'>{source}</p>
        </div>
      </div>
      </a>
    );
  };
  
  export default NewsCard;