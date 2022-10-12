import React from 'react'
import Profile from '../images/Profile.jpg'

function Chats() {
    return (
        <div className='chats'>
            <div className='user__profile'>
                <img src={Profile} className='user__img' />
                <span>Name</span> <br />
                <p>message</p>
            </div>
            <div className='user__profile'>
                <img src={Profile} className='user__img' />
                <span>Name</span> <br />
                <p>message</p>
            </div>
            <div className='user__profile'>
                <img src={Profile} className='user__img' />
                <span>Name</span> <br />
                <p>message</p>
            </div>

        </div>
    )
}

export default Chats