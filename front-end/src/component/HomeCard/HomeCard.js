import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeCard(props) {
    return (
        <div className="pl-4 h-[220px] w-[200px]">
            <NavLink to={`/product/${props.item.thirdLavelCategory}`}>
            <div className="flex justify-center bg-white rounded-lg group relative flex-col align-middle">
                 <img src={(props.item.image)?props.item.image : ""} alt="Front of men&#039;s Basic Tee in black." className="rounded-lg object-top object-cover h-[320px] w-full"/>
            </div>
            </NavLink>
        </div>
    )
}

export default HomeCard
