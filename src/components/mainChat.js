import React from 'react'

function Mainchat() {
    return (
        <div className='w-full flex flex-col border-2 border-red-400 p-4 justify-between'>
            <div className='w-full'>
                asda
            </div>
            <div className='relative'>
                <input type='text' className='w-full p-4 pr-16 bg-gray-100' placeholder='Type your message here.' />
                <button className='absolute right-0 p-4'>Send</button>
            </div>
        </div>
    )
}

export default Mainchat;