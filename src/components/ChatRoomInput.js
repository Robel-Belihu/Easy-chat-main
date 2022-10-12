import React from 'react'
import './ChatRoomInput.css'
import Attach from '../images/Attach.png';

function ChatRoomInput() {
    return (
        <div className='chatRoom__input'>
            <input placeholder='here, say something...' className='input__field' />
            <input type="file" id='fetch__file' placeholder='insert an image' />
            <label htmlFor='fetch__file'>
                <img src={Attach} alt='' />
            </label>
            <button className='chatRoom__button'>Send</button>
        </div>
    )
}

export default ChatRoomInput