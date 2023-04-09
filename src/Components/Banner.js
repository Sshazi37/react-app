import React from 'react'
import background from '../Assets/bg-image.jpg'
import { Link } from 'react-router-dom'

function Banner(props) {

    return (
        <>
            <div className=' banner' style={{ backgroundImage: `url(${background})` }}>
                <div className='bg-overlay'></div>
                <div className='container'>
                    <h1 className='banner-title'>{props.title}</h1>
                    <Link className='banner-btn' to="/shop">{props.btnText}</Link>
                </div>
            </div>

        </>
    )
}


Banner.defaultProps = {
    title: 'Online Shop',
    btnText: 'Shop'
};

export default Banner