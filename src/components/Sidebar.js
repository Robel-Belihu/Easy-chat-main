import React from 'react'
import './Sidebar.css'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import Chats from './Chats'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='container__sidebar'>
                <Navbar />
                <Searchbar />
                <Chats />
            </div>
        </div>
    )
}

export default Sidebar