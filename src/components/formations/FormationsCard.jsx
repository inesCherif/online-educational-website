import React from 'react'
import { coursesCard } from '../../data'
import Star from '@mui/icons-material/Star';
import './formations.css'


const FormationsCard = () => {
  return (
    <div>
        <section className="coursesCard">
            <div className="container grid2">
                {coursesCard.map((val) => {
                    return(
                    <div className="items">
                        <div className="content flex">
                            <div className="left">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                            </div>
                            <div className="text">
                                <h1>{val.coursesName}</h1>
                                <div className="rate">
                                    <Star className='i'/>
                                    <Star className='i'/>
                                    <Star className='i'/>
                                    <Star className='i'/>
                                    <Star className='i'/>
                                    <label htmlFor="">(5.0)</label>
                                </div>
                                <div className="details">
                                    {val.courTeacher.map((details) => (
                                    <div>
                                        <div className="box">
                                            <div className="dimg">
                                                <img src={details.dcover} alt="" />
                                            </div>
                                            <div className="para">
                                                <h4>{details.name}</h4>
                                            </div>
                                        </div>
                                        <span>{details.totalTime}</span>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <h3>{val.priceAll} / {val.pricePer}</h3>
                        </div>
                        <button className='outline-btn'>ENROLL NOW !</button>
                    </div>
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default FormationsCard
