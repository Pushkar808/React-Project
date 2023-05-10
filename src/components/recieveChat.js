import React from 'react'

function RecieveChat(props) {
    return (
        <div className='w-full' >
            <div className='float-left p-4 bg-gray-400 w-3/4 m-3'>
                {props.message}
            </div>
        </div>
    )
}

export default RecieveChat;