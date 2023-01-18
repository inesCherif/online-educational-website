import React from 'react'
import './style.css'
import { testimonal } from '../../../data'
import Title from '../../common/title/Title'
import Quote from '@mui/icons-material/FormatQuote';

const Test = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className="container">
            <Title subtitle="Testimonal" title="Our Successful Students"/>
            <div className="content grid2">
                {testimonal.map((val) =>(
                    <div className="items shadow">
                        <div className="box flex">
                            <div className="img">
                                <img src={val.cover} alt="" />
                                <Quote className='icon'/>
                            </div>
                            <div className="name">
                                <h2>{val.name}</h2>
                                <span>{val.post}</span>
                            </div>
                        </div>
                        <p>{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Test
