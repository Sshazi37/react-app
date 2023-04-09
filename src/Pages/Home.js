import React from 'react'
import Banner from '../Components/Banner'
import FeaturedProducts from '../Components/FeaturedProducts'


function Home() {
    return (
        <>
            <Banner title='Best Online Shop' btnText='Shop Now' />
            <FeaturedProducts />
        </>
    )
}

export default Home