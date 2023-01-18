import React from 'react'
import { team } from '../../data'
import Facebook from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Youtube from '@mui/icons-material/YouTube';

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="items shadow">
            <div className="img">
                <img src={val.cover} alt="" />
                <div className="overlay">
                <Facebook className='icon'/>
                <Instagram className='icon'/>
                <Twitter className='icon'/>
                <Youtube className='icon'/>
                </div>
            </div>
            <div className="details">
                <h2>{val.name}</h2>
                <p>{val.work}</p>
            </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
