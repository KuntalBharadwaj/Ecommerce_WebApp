import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCard from "../HomeCard/HomeCard"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeftSharp';
import ArrowRightIcon from '@mui/icons-material/ArrowRightSharp';
import { useState } from 'react';
import AllProduct from '../productsArray/AllProduct'

const Kurtas = AllProduct.filter(e=>{
    return (e.thirdLavelCategory === "mens_kurta")
})

const SareeW = AllProduct.filter(e=>{
    return (e.thirdLavelCategory === "saree")
})

const Gouns = AllProduct.filter(e=>{
    return (e.thirdLavelCategory === "gown")
})
const responsive = {
    0: { items: 2 },
    740: { items: 3 },
    1000: {items: 4.4},
    1435: { items: 5.5 },
    2500: { items: 6.5 }
};
// edit
const Mens_Kurtas = Kurtas.map((e, i) => {
    return <HomeCard key={i + 1} item={e} />
}).slice(0,12)

// edit
const Womens_Grouns = Gouns.map((e, i) => {
    return <HomeCard key={i + 1} item={e} />
}).slice(0,12)

// edit
const Saree = SareeW.map((e, i) => {
    return <HomeCard key={i + 1} item={e} />
}).slice(0,12)

let items

function CardCarosal(props) {
    if(props.sectionName === "Mens_Kurtas") {
        items = Mens_Kurtas
    }

    if(props.sectionName === "Womens_Gowns" ) {
        items = Womens_Grouns
    }

    if(props.sectionName === "Saree" ) {
        items = Saree
    }

    const [ActiveIndex, setActiveIndex] = useState(0)

    const slidePrev = () => {
        setActiveIndex(ActiveIndex - 2);
    }

    const slideNext = () => {
        setActiveIndex(ActiveIndex + 2);
    }

    const syncActiveIndex = (i) => {
        setActiveIndex(ActiveIndex)
    }

    return (
        <div className='relative h-[320px] lg:h-[350px] bg-slate-300 mx-2 rounded-sm'>
            <h1 className='my-8 ml-8 text-4xl font-bold'>{props.sectionName}</h1>
            <AliceCarousel
                mouseTracking
                items={items}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                onSlideChange={syncActiveIndex}
                activeIndex={ActiveIndex}
            />
            {(ActiveIndex === 0) ? "" :
                <div onClick={slidePrev} className='shadow-xl rounded-sm z-10 left-1 top-1/2 absolute h-[3rem] flex align-middle bg-white'>
                    <button><ArrowLeftIcon /></button>
                </div>
            }
            {(ActiveIndex >= items.length-4) ? "" :
            <div onClick={slideNext} className='shadow-xl z-10 rounded-sm top-1/2 right-1 absolute h-[3rem] flex align-middle bg-white'>
                <button><ArrowRightIcon /></button>
            </div>
            }
        </div>
    )
}

export default CardCarosal