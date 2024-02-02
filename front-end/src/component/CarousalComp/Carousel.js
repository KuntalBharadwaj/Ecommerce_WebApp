import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const arrayCarousel = ["/assets/carosalImage/img1.jpg", 
     "/assets/carosalImage/img2.jpg", 
    "/assets/carosalImage/img3.jpg", 
    "/assets/carosalImage/img1.jpg", 
    "/assets/carosalImage/img2.jpg"];


const items = arrayCarousel.map(e => {
    return <img className="item object-center w-[100vw] h-[75vh]" data-value="1" src={e} alt='not found'/>
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