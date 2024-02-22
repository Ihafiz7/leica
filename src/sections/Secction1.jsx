import React from 'react'
import data from '../Components/sec1Data';


const Secction1 = ({showSearch}) => {
    const images = ['Logo/s1image1.webp', 'Logo/s1image21.webp', 'Logo/s1image31.jpg', 'Logo/s1image4.jpg', 'Logo/s1image5.avif'];
    const [currentImage, setCurrentImage] = React.useState(0);


    React.useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length]);
    const handleButtonClick = (imageNumber) => {
        setCurrentImage(imageNumber);
    };


  return (
    <div className='relative w-screen h-screen select-none'>
        <img src={images[currentImage]} alt='Home_Images' loading='lazy' className='w-full h-full object-cover select-none'  />
        <div className='absolute top-[30%] left-[7%] font-corpS'>
            {data.map((item, index) => (
                <ul key={index} className={`flex flex-col items-start gap-8 text-stone-300 ${index === currentImage ? "flex" : "hidden"}`}>
                    <li className='text-8xl font-bold'>{item.titele}</li>
                    <li className='font-bold text-2xl'>{item.subtitle}</li>
                    <li className='text-lg font-semibold px-6 p-3 rounded-3xl bg-white text-black cursor-pointer hover:bg-red-400 hover:text-white'>{item.btnTxt}</li>
                </ul>
            ))}
        </div>
        <div className='absolute bottom-10 right-0 mr-12 flex items-center gap-8'>
            {images.map((item, index) =>(
                <button key={index} onClick={() => handleButtonClick(index)} className={` ${currentImage === index ?'w-8 h-8':'w-4 h-4'} rounded-full border-[1px] border-solid ${currentImage === index ? 'border-red-600': 'border-slate-800'}`}></button>
            ))}
        </div>
    </div>
  )
}

export default Secction1