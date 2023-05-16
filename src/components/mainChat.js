import React, { useState } from 'react'
import SendChat from './sendChat';
import RecieveChat from './recieveChat';
import MessageData from '../data/messages.json'
function Mainchat() {
    const [message, setmessage] = useState("");
    const sendMessage = () => {
        
    }
    return (
        <>
            <div className='w-full flex flex-col border-2 border-red-400 p-4 justify-between'>
                <div className='w-full'>
                    <SendChat message={"Sent message"} />
                    <RecieveChat message={"Recieve chat"} />
                </div>
                <div className='relative'>
                    <input type='text' className='w-full p-4 pr-16 bg-gray-100' placeholder='Type your message here.' onChange={(element) => { console.log(element.target.value) }} />
                    <button className='absolute right-0 p-4 hover:bg-gray-300' onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    )
}

export default Mainchat;