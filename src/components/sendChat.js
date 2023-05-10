import React from 'react'

function SendChat(props) {
    return (
        <div className='w-full' >
            <div className='float-right p-4 bg-gray-300 w-3/4 m-3'>
                {props.message}
            </div>
        </div>
    )
}

export default SendChat