import React from 'react'
import images from '../Components/productData';

const Section3 = () => {
    const containerRef = React.useRef(null);
    const [visibleStart, setVisibleStart] = React.useState(0);
    const [itemsNum, setItemNum] = React.useState(3);
    const getItemNum = () => {
        const screen = window.innerWidth;
        if (screen >= 1024) {
            return 3;
        } else if (screen >= 768) {
            return 2;
        } else {
            return 1;
        }
    };
    React.useEffect(() => {
        function handleResize() {
          setItemNum(getItemNum());
        }    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollLeft = () => {
        if (visibleStart > 0) {
        setVisibleStart((prev) => prev - 1);
        }
    };

    const scrollRight = () => {
        if (visibleStart < images.length - itemsNum) {
        setVisibleStart((prev) => prev + 1);
        }
    };


  return (
    <div className='bg-stone-200'>
        <div className='flex flex-col gap-3 my-12 px-12'>
            <hr className='w-12 h-[3px] bg-black'/>
            <div className='flex items-center justify-between'>
                <p className='list-none text-4xl font-bold font-corpS'> Product Highlights</p>
            </div>
        </div>
        <div className='flex items-center justify-center gap-8 w-screen' ref={containerRef}>
            <button onClick={scrollLeft} className='mx-[-45px] z-[5] border-[1px] border-white bg-slate-100'> <img src='Logo/cl.svg' alt='arrow' className='w-6 h-6' /> </button>
            {images.slice(visibleStart, visibleStart + itemsNum). map((item, index) => (
                <div key={index} className='flex flex-col md:w-[300px] xl:w-[300px] lg:w-[400px] h-[400px] border-[1px] border-solid border-white bg-white shadow-lg pb-2'>
                    <div>
                        <p className='mx-4 mt-2 font-bold font-corpS text-xl'>{item.title}</p>
                    </div>
                    <img src={item.src} alt='Products' className='xl:w-[300px] lg:w-[400px] h-[300px] object-contain' />
                    <div className='flex justify-end bg-stone-200 p-2'>
                        <button className='flex items-center justify-center w-48 h-12 p-4 border-2 bg-black text-white rounded-2xl'>Discover</button>
                    </div>
                    
                </div>
            ))}
            <button onClick={scrollRight} className='mx-[-45px] z-[5] border-[1px] border-white bg-slate-100'> <img src='Logo/cr.svg' alt='arrow' className='w-6 h-6' /> </button>
        </div>
        
    </div>
  )
}

export default Section3