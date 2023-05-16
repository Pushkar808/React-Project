import React from 'react'
import SidebarChat from './sidebarChat'
import JsonData from '../data/contacts.json'
function Sidebar() {
    console.log()
    return (
        <div className='w-1/3 h-screen border-2 p-4 dark:bg-slate-800 overflow-x-auto' >
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                </div>
                <input type="search" id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for conversations"
                />
            </div>
            <div className='py-4 flex text-sm dark:text-white justify-between border-b-[1.5px] border-gray-500 dark:border-slate-300'>
                <div className='p-2'> CONVERSATIONS</div>
                <div className='rounded-full p-2'>+</div>
            </div>

            <div className=''>
                {
                    JsonData.contactinfo.map((element, index) => {
                        return (
                            <SidebarChat name={element.Name} key={index} message={"element.Contact"} />)
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar