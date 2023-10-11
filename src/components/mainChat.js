import React, { useEffect, useState } from 'react'
import SendChat from './sendChat';
import RecieveChat from './recieveChat';
import MessageData from '../data/message.json'
import { useParams } from 'react-router-dom';
import { addItemToCart } from '../actionreducers/action';
import { useDispatch } from "react-redux";
function Mainchat() {
    const dispatch = useDispatch();
    const [message, setmessage] = useState("");
    const [newmessage, setnewmessage] = useState("");
    let { userId } = useParams();
    const getMessages = (userId) => {
        if (userId) {
            setmessage(MessageData["user" + userId].chat);
        }
    }
    useEffect(() => {
        getMessages(userId)
    }, [userId, newmessage])
    const sendMessage = () => {
        const data = {
            from: 1,
            message: newmessage
        }
        MessageData["user" + userId].chat.push(data);
        setmessage(MessageData["user" + userId].chat);
        dispatch(addItemToCart(newmessage, "user" + userId, 1))
    }
    return (
        <>
            <div className='w-full flex flex-col border-2 border-red-400 p-4 justify-between'>
                <div className='w-full'>
                    {message && message?.map((element, index) => {
                        if (element.from)
                            return <SendChat message={element.message} key={index} />
                        else
                            return <RecieveChat message={element.message} key={index} />
                    })}
                </div>
                <div className='relative'>
                    <input type='text' className='w-full p-4 pr-16 bg-gray-100' placeholder='Type your message here.' onChange={(element) => { setnewmessage(element.target.value) }} />
                    <button className='absolute right-0 p-4 hover:bg-gray-300' onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    )
}

export default Mainchat;