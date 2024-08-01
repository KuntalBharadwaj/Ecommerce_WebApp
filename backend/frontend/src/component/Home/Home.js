import React, { useContext } from 'react'
import Carousel from '../CarousalComp/Carousel'
import CardCarousel from '../cardcarousal/CardCarosal'
import Footer from '../footer/Footer'
import { ProductContext } from '../context/ProductContext'
import Shimmer from '../Shimmer.js/Shimmer'

function Home() {

    const {isProductFetched} = useContext(ProductContext)

    return (
        <div>
            {(!isProductFetched)?
            <div>
                <Shimmer/>
            </div>:
            <div>
            <Carousel/>
            <section className='space-y-20 flex flex-col justify-center'>
                <CardCarousel  sectionName="Mens_Kurtas"/>
                <CardCarousel  sectionName="Womens_Gowns"/>
                <CardCarousel  sectionName="Saree"/>
                <Footer/>
            </section>
            </div>}
        </div>
    )
}

export default Home
