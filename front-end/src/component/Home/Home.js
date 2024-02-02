import React from 'react'
import Carousel from '../CarousalComp/Carousel'
import CardCarousel from '../cardcarousal/CardCarosal'
import Footer from '../footer/Footer'

function Home() {
    return (
        <div>
            <Carousel/>
            <section className=' space-y-20 flex flex-col justify-center'>
                <CardCarousel sectionName="Mens_Kurtas"/>
                <CardCarousel sectionName="Womens_Gowns"/>
                <CardCarousel sectionName="Saree"/>
                <Footer/>
            </section>
        </div>
    )
}

export default Home
