import React from 'react'
import { Link } from "react-router-dom";

function SidebarChat(props) {
  return (
    <Link to={`/chat/${props.id}`}>
      <div className='dark:hover:bg-slate-400 hover:bg-slate-500 p-4 flex cursor-pointer'>
        <div>
          <img className="w-14 h-14 rounded-full" src='https://laravelnews.s3.amazonaws.com/images/avatar-images-spatie.png' alt="Sample" />
        </div>
        <div className='w-full px-3 dark:text-white'>
          <h1>{props.name}</h1>
          <p>{props.message} </p>
        </div>
      </div>
    </Link>
  )
}

export default SidebarChat