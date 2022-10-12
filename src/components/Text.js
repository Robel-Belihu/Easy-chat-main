import React from 'react'
import './Text.css'
import Profile from '../images/Profile.jpg'
function Text() {
    return (
        <div className='text owner'>
            <div className='text__img' >
                <img src={Profile} />
                <small>just now</small>
            </div>
            <div className='text__content'>
                <p>hello</p>
                <img
                    className='textContent__img'
                    src='https://cdn2.opendemocracy.net/media/images/The_Sacrifice_of_Isaac_LACMA_M.2000.179.40.max-760x504.jpg'
                />
            </div>
        </div>
    )
}

export default Text