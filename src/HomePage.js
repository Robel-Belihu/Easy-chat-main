import React from 'react'
import './HomePage.css'
import Sidebar from './components/Sidebar'
import ChatRoom from './components/ChatRoom'

function HomePage() {
    return (
        <div className='homePage'>
            <div className='container__homePage'>
                <Sidebar />
                <ChatRoom />
            </div>
        </div>
    )
}

export default HomePage