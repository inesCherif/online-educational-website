import React from 'react'
import Title from '../common/title/Title'
import { blog } from '../../data'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Comment from '@mui/icons-material/ForumRounded';

const Hblog = () => {
  return (
    <>
        <section className='blog'>
            <div className="container">
                <Title subtitle="Notre Blog" title="Dernièrement Depuis Blog"/>
                <div className="grid2">
                {blog.slice(0,3).map((val) =>(
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
                </div>
            </div>
        </section>
    </>
  )
}

export default Hblog