import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const arrayCarousel = ["/assets/carosalImage/img1.jpg", 
     "/assets/carosalImage/img2.jpg", 
    "/assets/carosalImage/img3.jpg", 
    "/assets/carosalImage/img1.jpg", 
    "/assets/carosalImage/img4.jpg"];


const items = arrayCarousel.map(e => {
    return <div className='mt-2 rounded-md flex justify-center'>
     <img className="item rounded-md object-center w-[75vw] h-[32vh] sm:h-[82vh]" data-value="1" src={e} alt='not found'/>
     </div>
})

const Carousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
);

export default Carousel;