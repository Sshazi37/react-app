import React from 'react'
import Banner from '../Components/Banner'

function About() {
    return (
        <>
            <Banner title='About Shop' />
            <div className='container text mt-15'>
                This website is a portfolio project of mine, Muhammad Shahzaib.
                I've utilized various React concepts such as JSX, reusable components, routes, useEffects, useStates,
                .map, filters, local storage, cart pages, shop pages, event handling,
                and conditional rendering. In addition, I've also integrated the ability to fetch data from APIs.
                If you're interested in hiring me or want to know more about my skills and experience,
                please visit <a href='http://shahzaib.info/' target='_blank' rel="noreferrer"> shahzaib.info.</a> Thank you for checking out my project!

            </div>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default About