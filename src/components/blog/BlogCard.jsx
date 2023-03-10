import React from 'react'
import './blog.css'
import { blog } from '../../data'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Comment from '@mui/icons-material/ForumRounded';



const BlogCard = () => {
  return (
    <>
    {blog.map((val) =>(
        <div className="items shadow">
            <div className="img">
                <img src={val.cover} alt="" />
            </div>
            <div className="text">
                <div className="admin flexSB">
                    <span>
                        <PersonIcon className='icon'/>
                        <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                        <CalendarMonth className='icon'/>
                        <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                        <Comment className='icon'/>
                        <label htmlFor="">{val.com}</label>
                    </span>
                </div>
                <h1>{val.title}</h1>
                <p>{val.desc}</p>
            </div>
        </div>
    ))}
    </>
  )
}

export default BlogCard