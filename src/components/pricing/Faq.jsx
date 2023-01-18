import React, { useState } from 'react'
import { faq } from '../../data'
import Title from '../common/title/Title'
import ChevronLeft from '@mui/icons-material/ArrowDropDown';
import ChevronRight from '@mui/icons-material/ArrowRight';


const Faq = () => {
  const [click, setClick] = useState(false) 
  
  const toggle = (index) => {
    if(click === index){
        return setClick(null)
    }
    setClick(index)
  }
  return (
    <>
      <Title subtitle="QUESTIONS" title="Les Questions Les Plus Demandées"/>
      <section className='faq'>
        <div className="container">
            {faq.map((val, index) => (
                <div className="box">
                    <button className='accordion' onClick={() => toggle(index) }key ={index}>
                        <h2>{val.title}</h2>
                        <span>{click === index ?<ChevronLeft/> : <ChevronRight />}</span>
                    </button>
                    {click === index? (
                        <div className="text">
                        <p>{val.desc}</p>
                        </div>
                    ) : null}
                    
                </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Faq
