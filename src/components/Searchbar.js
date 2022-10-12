import React from 'react'
import './Searchbar.css'
import Search from '../images/Search.png'
import Profile from '../images/Profile.jpg'

function Searchbar() {
    return (
        <div className='container__searchbar'>
            <div className='form'>
                <img className='search__icon' src={Search} />
                <input className='searchInput' placeholder='Search ' />
            </div>
            <div className='user__profile'>
                <img src={Profile} className='user__img' />
                <span>Name: </span>
                <p> . .. message</p>
            </div>

        </div>
    )
}

export default Searchbar